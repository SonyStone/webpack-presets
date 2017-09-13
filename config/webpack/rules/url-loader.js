module.exports = function() {
  return {
    module: {
      rules: [
        /**
         * ```
         * npm i url-loader --save-dev
         * ```
         * 
         * Loads files as `base64` encoded URL
         * [github]{@link https://github.com/webpack-contrib/url-loader}
         * [npm]{@link https://www.npmjs.com/package/url-loader}
         * [Documentation]{@link https://webpack.js.org/loaders/url-loader/}
         * 
         */
        {
          test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
          loader: 'url-loader',
          options: {
            name: '[name].[hash:20].[ext]',
            limit: 10000,
          },
        },
      ],
    },
  };
};
