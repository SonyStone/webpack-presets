const ProgressPlugin = require('webpack/lib/ProgressPlugin');

module.exports = function() {
    return {
        plugins: [
            /**
             * show compile progress to the command line.
             * [Source]{@link https://github.com/webpack/webpack/blob/master/lib/ProgressPlugin.js}
             */
            new ProgressPlugin(),
        ]
    }
}