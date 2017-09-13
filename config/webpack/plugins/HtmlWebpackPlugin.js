const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];

module.exports = function () {
  return {
    plugins: [
      /**
       * ```
       * npm install --save-dev html-webpack-plugin
       * ```
       * The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       * 
       * [Documentation]{@link https://webpack.js.org/plugins/html-webpack-plugin/}
       * [addons]{@link https://github.com/jantimon/html-webpack-plugin#third-party-addons}
       */
      new HtmlWebpackPlugin({
        template: "./src\\index.html",
        filename: "./index.html",
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        minify: false,
        cache: true,
        showErrors: true,
        chunks: "all",
        excludeChunks: [],
        title: "Webpack App",
        xhtml: true,
        chunksSortMode: function sort(left, right) {
          let leftIndex = entryPoints.indexOf(left.names[0]);
          let rightindex = entryPoints.indexOf(right.names[0]);
          if (leftIndex > rightindex) {
            return 1;
          } else if (leftIndex < rightindex) {
            return -1;
          } else {
            return 0;
          }
        }
      }),
    ]
  }
}
