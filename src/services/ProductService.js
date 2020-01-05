import { Service, autowired } from "snowball/app";

class ProductService extends Service {
    @autowired
    _tradeServer: Server;

    getSpusByIds(spuIds) {
        return this._tradeServer.post('/product/getSpusByIds', {
            spuIds
        });
    }

    search(params) {
        return this._tradeServer.post('/product/listSpu', params);
    }
}

export default ProductService;