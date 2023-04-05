const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ThemeWatcher = require('@salla.sa/twilight/watcher.js');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const $ = require('jquery');

const asset = file => path.resolve('src/assets', file || '');
const public = file => path.resolve("public", file || '');

module.exports = {
    entry  : {
        app     : [asset('styles/app.scss'), asset('js/wishlist.js'), asset('js/app.js')],
        home    : asset('js/home.js'),
        landing : asset('js/landing.js'),
        checkout: [asset('js/cart.js'), asset('js/thankyou.js')],
        pages   : [asset('js/loyalty.js'), asset('js/brands.js'),],
        product : [asset('js/product.js'), asset('js/products.js')],
        order   : asset('js/order.js'),
        theme   : [   
                    asset('js/themeJs/jquery.min.js'), 
                    asset('js/themeJs/bootstrap.bundle.min.js'),
                    asset('js/themeJs/plugins.js'),
                    asset('js/themeJs/zoom.js'),
                    asset('js/themeJs/magnific-popup.js'),
                    asset('js/themeJs/slick.js'),
                    asset('js/themeJs/jquery-ui.js'),
                    // asset('js/themeJs/light-gallery.js'),
                    asset('js/themeJs/masonary.js'),
                    asset('js/themeJs/main.js')
                ],
    },
    output : {
        path: public(),
        clean: true,
        chunkFilename: "[name].[contenthash].js"
    },
    stats  : {modules: false, assetsSort: "size", assetsSpace: 50},
    module : {
        rules: [
            {
                test   : /\.js$/,
                exclude: [
                    /(node_modules)/,
                    asset('js/twilight.js'),
                ],
                use    : {
                    loader : 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                          ["@babel/plugin-transform-runtime",
                           {
                               "regenerator": true
                           }
                          ]
                        ],
                    }
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {url: false}},
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: [
                    /(node_modules)/,
                ],
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: './fonts/',
                      name: './fonts/[name].[ext]',
                      limit: 1000,

                    },
                  },
                ],
              },
        ],
    },
    plugins: [
        new ThemeWatcher(),
        new MiniCssExtractPlugin(),
        new CopyPlugin({patterns: [{from: asset('images'), to: public('images')}]}),
        new CopyPlugin({patterns: [{from: 'node_modules/font-awesome/fonts', to: public('fonts')}]}),
     
    ],
}
;
