/**
 * ```
 * npm install webpack-merge --save-dev
 * ```
 * webpack-merge - Merge designed for Webpack
 * [git]{@link https://github.com/survivejs/webpack-merge}
 * [npm]{@link https://www.npmjs.com/package/webpack-merge}
 */
const merge = require('webpack-merge');


const devserver = require('./webpack/config/webpack/devserver');

module.exports = function(env) {
  if (env === 'prod') {
    return merge([
        devserver(),
        // import and put presets here
    ]);
  };
  if (env === 'dev') {
    return merge([
        // import and put presets here
    ]);
  };
};
