import { Service, autowired } from "snowball/app";
import { Server } from "../core/Server";

export default class CategoryService extends Service {
    @autowired
    _tradeServer: Server;

    listByPid(pid) {
        return this._tradeServer.post('/category/listCateByPid', {
            pid
        });
    }
}
