import { configuration, singleton } from 'snowball/app';
import { ViewModelConfiguration } from 'nuclear';
import { Server } from './core/Server';

import UserService from './services/UserService';
import CategoryService from './services/CategoryService';
import SellerPickerService from './services/SellerPickerService';
import ProductService from './services/ProductService';
import SearchService from './services/SearchService';
import SellerService from './services/SellerService';

export const AppConfiguration = configuration({
    dependencies: [ViewModelConfiguration],
    modules: {
        userService: singleton(UserService),
        categoryService: CategoryService,
        productService: ProductService,
        sellerService: SellerService,
        sellerPickerService: SellerPickerService,
        searchService: SearchService,
        authServer: (ctx, app) => new Server({
            baseUrl: app.env.API_URL + '/auth_server'
        }),
        baseServer: (ctx, app) => new Server({
            baseUrl: app.env.API_URL + '/base_server'
        }),
        marketServer: (ctx, app) => new Server({
            baseUrl: app.env.API_URL + '/market_server'
        }),
        tradeServer: (ctx, app) => new Server({
            baseUrl: app.env.API_URL + '/trade_server'
        }),
        sellerServer: (ctx, app) => new Server({
            baseUrl: app.env.API_URL + '/seller_server'
        })
    }
});