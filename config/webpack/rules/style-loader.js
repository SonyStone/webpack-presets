module.exports = function() {
    return {
        module: {
            rules: [
                /**
                 * ```
                 * npm install style-loader --save-dev
                 * ```
                 * Adds CSS to the DOM by injecting a <style> tag
                 * It's recommended to combine style-loader with the css-loader
                 * []{@link https://webpack.js.org/loaders/style-loader/}
                 * [github]{@link https://github.com/webpack-contrib/style-loader}
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
