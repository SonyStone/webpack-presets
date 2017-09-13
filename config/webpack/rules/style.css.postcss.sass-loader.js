const postcssPlugins = require('./postcss.plugin');
const path = require('path');

/**
 * SASS Loader
 * [Git]{@link https://github.com/webpack-contrib/sass-loader }
 * [Documentation]{@link https://github.com/sass/node-sass }
 * npm install sass-loader node-sass webpack --save-dev
 */

module.exports = function(paths) {
    paths = paths || process.cwd();
    return {
        module: {
            rules: [{
                test: /\.scss$|\.sass$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: postcssPlugins,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                        sourceMap: false,
                        precision: 8,
                        // sourceComments: true,
                        includePaths: [
                            // path.resolve("src\\app\\style-sheets")
                        ],
                        },
                    },
                ],
                include: [
                    // paths
                    path.join(process.cwd(), 'src\\styles.css'),
                    path.join(process.cwd(), 'src\\app\\app.scss'),
                ],
            }],
        },
    };
};

