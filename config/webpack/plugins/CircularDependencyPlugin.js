const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = function() {
  return {
    plugins: [
      /**
       * ```
       * npm install circular-dependency-plugin --save-dev
       * ```
       * 
       * Detect modules with circular dependencies when bundling with webpack.
       * 
       * Circular dependencies are often a necessity in complex software,
       * the presence of a circular dependency doesn't always imply a bug,
       * but in the case where the you believe a bug exists, this module may help find it.
       * 
       * [Git]{@link https://github.com/aackerman/circular-dependency-plugin}
       * [npm]{@link https://www.npmjs.com/package/circular-dependency-plugin}
       */
      new CircularDependencyPlugin({
        exclude: /(\\|\/)node_modules(\\|\/)/,
        failOnError: false,
      }),
    ],
  };
};
