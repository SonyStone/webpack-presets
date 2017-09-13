const path = require('path');
const fs = require('fs');
const {
  CommonsChunkPlugin,
} = require('webpack').optimize;

const nodeModules = path.join(process.cwd(), 'node_modules');
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);


module.exports = function() {
  return {
    plugins: [
      /**
       * The CommonsChunkPlugin is an opt-in feature that creates a separate file
       * (known as a chunk), consisting of common modules shared between multiple entry points.
       * By separating common modules from bundles, the resulting chunked file can be
       * lloaded once initially, and stored in cache for later use
       * [Documentation]{@link https://webpack.js.org/plugins/commons-chunk-plugin/}
       */
      new CommonsChunkPlugin({
        name: [
          'inline',
        ],
        minChunks: null,
      }),
      new CommonsChunkPlugin({
        name: [
          'vendor',
        ],
        minChunks: (module) => {
          return module.resource &&
            (module.resource.startsWith(nodeModules) ||
              module.resource.startsWith(genDirNodeModules) ||
              module.resource.startsWith(realNodeModules));
        },
        chunks: [
          'main',
        ],
      }),

      new CommonsChunkPlugin({
        name: [
          'main',
        ],
        minChunks: 2,
        async: 'common',
      }),
    ],
  };
};
