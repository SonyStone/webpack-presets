const { 
    GlobCopyWebpackPlugin,
    NamedLazyChunksWebpackPlugin,
    BaseHrefWebpackPlugin,
} = require('@angular/cli/plugins/webpack');

const path = require('path');

module.exports = function() {
    return {
        plugins: [
            /**
             * This is a webpack plugin that copies individual files or entire directories to the build directory.
             * [Source]{@link https://github.com/angular/angular-cli/blob/master/packages/%40angular/cli/plugins/glob-copy-webpack-plugin.ts}
             */
            new GlobCopyWebpackPlugin({
                patterns: [
                'assets',
                'favicon.ico',
                ],
                globOptions: {
                'cwd': path.resolve('src'),
                'dot': true,
                'ignore': '**/.gitkeep',
                },
            }),

            /**
             * This just extends webpack.NamedChunksPlugin to prevent name collisions.
             * [Source]{@link https://github.com/angular/angular-cli/blob/master/packages/%40angular/cli/plugins/named-lazy-chunks-webpack-plugin.ts}
             * [NamedChunksPlugin]{@link https://github.com/webpack/webpack/blob/master/lib/NamedChunksPlugin.js}
             */
            new NamedLazyChunksWebpackPlugin(),

            /**
             * 
             * [Source]{@link https://github.com/angular/angular-cli/blob/master/packages/%40angular/cli/lib/base-href-webpack/base-href-webpack-plugin.ts}
             */
            new BaseHrefWebpackPlugin({}),
        ]
    }
}