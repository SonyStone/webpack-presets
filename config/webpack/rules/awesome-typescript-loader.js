
module.exports = function() {
  return {
    module: {
      rules: [{
        /**
         * ```
         * npm install awesome-typescript-loader --save-dev
         * ```
         * The best TypeScript loader for Webpack
         * [Git]{@link https://github.com/s-panferov/awesome-typescript-loader}
         * [npm]{@link https://www.npmjs.com/package/shmawesome-typescript-loader}
         */
        test: /\.ts$/,
        use: [{
          use: ['awesome-typescript-loader'],
        }],
      }],
    },
  };
};
