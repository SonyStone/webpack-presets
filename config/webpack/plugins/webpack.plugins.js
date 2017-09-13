const { 
    NoEmitOnErrorsPlugin,
    SourceMapDevToolPlugin,
    NamedModulesPlugin
} = require('webpack');

module.exports = function() {
    return {
        plugins: [
            /**
             * to skip the emitting phase whenever there are errors while compiling.
             * This ensures that no assets are emitted that include error
             * [Documentation]{@link https://webpack.js.org/plugins/no-emit-on-errors-plugin/ }
             */
            new NoEmitOnErrorsPlugin(),

            /**
             * [Documentation]{@link https://webpack.js.org/plugins/source-map-dev-tool-plugin/ }
             * [about Source Maps]{@link https://survivejs.com/webpack/building/source-maps/}
             */
            new SourceMapDevToolPlugin({
                filename: "[file].map[query]",
                moduleFilenameTemplate: "[resource-path]",
                fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
                sourceRoot: "cg-doo-frontend:///"
            }),

            /** 
             * This plugin will cause the relative path of the module to be displayed when HMR is enabled.
             * Suggested for use in development.
             * [Documentation]{@link https://webpack.js.org/plugins/named-modules-plugin/ }
            */
            new NamedModulesPlugin({}),
        ]
    }
}