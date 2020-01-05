import { Service, autowired } from "snowball/app";

export default class SpuTypeService extends Service {
    @autowired
    _tradeServer: Server;

    listSpuTypes() {
        return this._tradeServer.post('/product/listSpuTypes');
    }
}