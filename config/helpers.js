/**
 * @author: @AngularClass
 */
const path = require('path');


// Helper functions

// absolut path to upper folder
const ROOT = path.resolve(__dirname, '..');

// path.resolve() fixet to ROOT folder
const root = path.join.bind(path, ROOT);

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
