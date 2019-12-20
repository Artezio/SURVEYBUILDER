const path = require('path');
const pathToArtezioPackages = path.resolve(__dirname, './node_modules/@artezio');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        library: 'Surveybuilder',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ['node_modules'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx|jsx)$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    externals: {
        "react": "react",
    }
};