const {
  AotPlugin,
} = require('@ngtools/webpack');

module.exports = function() {
  return {
    module: {
      rules: [{
        test: /\.ts$/,
        use: [{
          loader: '@ngtools/webpack',
        }],
      },
    ],
    },
    plugins: [
      /**
       * ```
       * npm install @ngtools/webpack --save-dev
       * ```
       * Webpack plugin that AoT compiles your Angular components and modules.
       * [npm]{@link https://www.npmjs.com/package/@ngtools/webpack}
       */
      new AotPlugin({
        mainPath: 'main.ts',
        replaceExport: false,
        hostReplacementPaths: {
          'environments\\environment.ts': 'environments\\environment.ts',
        },
        exclude: [],
        tsConfigPath: 'src\\tsconfig.app.json',
        skipCodeGeneration: true,
      }),
    ],
  };
};
