module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: '',
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                            sourceMap: true,
                            importLoaders: 1,
                            },
                        },
                    ],
                },
            ],
        },
    };
};
