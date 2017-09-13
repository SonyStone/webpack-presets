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
