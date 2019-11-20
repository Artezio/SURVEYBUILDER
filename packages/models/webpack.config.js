const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        globalObject: 'this',
        libraryTarget: 'umd',
        library: 'Models',
        crossOriginLoading: 'use-credentials'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    externals: {
        "@art-forms/observable": "@art-forms/observable"
    }
}