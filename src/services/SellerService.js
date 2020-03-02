import { Service, autowired } from "snowball/app";

export default class SellerService extends Service {
    @autowired
    _sellerServer;

    getMySellers() {
        return this._sellerServer.post('/admin/seller/getMySellers');
    }

    getPlatformSellers({ status } = {}) {
        return this._sellerServer.post('/admin/seller/getPlatformSellers', {
            status: status == null ? 1 : status
        });
    }
}