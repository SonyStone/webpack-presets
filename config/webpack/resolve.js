module.exports = function() {
  return {
    /**
     * These options change how modules are resolved. webpack provides reasonable defaults,
     * but it is possible to change the resolving in detail
     * [Documantation]{@link https://webpack.js.org/configuration/resolve/}
     * [Documantation]{@link https://webpack.js.org/concepts/module-resolution/}
     */
    resolve: {
      extensions: [
        '.ts',
        '.js',
      ],
      modules: [
        './node_modules',
      ],
      symlinks: true,
    },
    /**
     * This set of options is identical to the resolve property set above,
     * but is used only to resolve webpack's loader packages
     * [Documantation]{@link https://webpack.js.org/configuration/resolve/#resolveloader}
     * [Documantation]{@link https://webpack.js.org/concepts/module-resolution/}
     */
    resolveLoader: {
      modules: [
        './node_modules',
      ],
      extensions: ['.js', '.json'],
      mainFields: ['loader', 'main'],
    },
  };
};
