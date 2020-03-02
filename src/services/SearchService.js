import { Service, autowired } from "snowball/app";

class SearchService extends Service {
    @autowired
    _tradeServer;

    searchByFormula(formulaId, pageIndex, pageSize) {
        return this._tradeServer.post('/search/searchByFormula', {
            formulaId,
            pageIndex,
            pageSize
        });
    }
}

export default SearchService;