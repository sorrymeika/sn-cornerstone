import { Service, autowired } from "snowball/app";

class FormulaService extends Service {
    @autowired
    _tradeServer: Server;

    listFormula({ keywords, sellerId, pageIndex, pageSize }) {
        let name,
            id;

        if (/^\d+$/.test(keywords)) {
            id = Number(keywords);
        } else {
            name = keywords;
        }

        return this._tradeServer.post('/formula/list', {
            id,
            sellerId,
            name,
            pageIndex,
            pageSize
        });
    }

    getFormulaById(formulaId) {
        return this._tradeServer.post('/formula/getById', {
            id: formulaId
        });
    }
}

export default FormulaService;