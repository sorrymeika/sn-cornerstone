import { observable, util } from "snowball";
import { Service, autowired } from "snowball/app";
import { Server } from "../core/Server";

export type SignInParams = {
    account: string,
    password: string,
}

class UserService extends Service {
    @observable account;

    @autowired
    _authServer: Server;

    signIn({ account, password, app }: SignInParams) {
        return this._authServer.post('/auth/login', { account, password, app });
    }

    async loadMyAccount() {
        const res = await this.getMyAccount();
        this.account = res.data;
        return res;
    }

    getMyAccount() {
        return this._authServer.post('/admin/account/getMyAccount');
    }

    storeAccountId(accountId) {
        util.store('accountId', accountId);
    }

    getAccountId() {
        return util.store('accountId');
    }
}

export default UserService;