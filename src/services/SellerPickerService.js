import React from 'react';
import ReactDOM from 'react-dom';
import { Service, autowired } from 'snowball/app';
import SellerPicker from '../components/SellerPicker';
import { observable } from 'snowball';
import { Server } from '../core/Server';

class NoSellerError extends Error {
    code = "NoSeller"
}

export default class SellerPickerService extends Service {
    onMessage = this.app.createEmitter();

    @observable
    sellers = [];

    @autowired
    _sellerServer: Server;

    constructor() {
        super();

        this.container = document.createElement('DIV');
        document.body.appendChild(this.container);
    }

    show({
        onCancel,
        onSelect,
        onError
    }) {
        this.onMessage.once((state) => {
            switch (state.type) {
                case 'cancel':
                    onCancel && onCancel();
                    break;

                case 'select':
                    onSelect && onSelect(state.seller);
                    break;

                case 'error':
                    onError && onError(state.error);
                    break;
            }
            this.close();
        });

        this._sellerServer.post('/admin/seller/getMySellers')
            .then((res) => {
                this.sellers = res.data;
                if (this.sellers.length === 0) {
                    this._dispatch({
                        type: 'error',
                        error: new NoSellerError('您的账号还未开通商户，暂时无法进行后续操作！')
                    });
                } else {
                    if (this.sellers.length === 1) {
                        this._dispatch({
                            type: 'select',
                            seller: this.sellers[0]
                        });
                    } else {
                        this._render({
                            visible: true
                        });
                    }
                }
            })
            .catch(e => {
                this._dispatch({
                    type: 'error',
                    error: e
                });
            });
    }

    close() {
        this._render({
            visible: false
        });
    }

    _dispatch = (state) => {
        this.onMessage.emit(state);
    }

    _render(props) {
        ReactDOM.render(
            <SellerPicker
                {...props}
                onCancel={() => this._dispatch({ type: 'cancel' })}
                onSelect={(seller) => this._dispatch({ type: 'select', seller })}
            />
            , this.container
        );
    }
}