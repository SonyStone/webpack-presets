module.exports = function() {
    return {
        module: {
            rules: [
                /**
                 * ```
                 * npm install --save-dev css-loader
                 * ```
                 * The css-loader interprets @import and url() like import/require() and will resolve them.
                 * []{@link https://webpack.js.org/loaders/css-loader/}
                 * [github]{@link https://github.com/webpack-contrib/css-loader}
                 * 
                 */
                {
                    test: /\.css$/,
                    use: [{
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
            ],
        },
    };
};
