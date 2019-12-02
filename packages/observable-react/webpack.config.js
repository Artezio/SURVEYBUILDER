const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        globalObject: 'this',
        libraryTarget: 'umd',
        library: 'ObservableReact',
        crossOriginLoading: 'use-credentials'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    externals: {
        "react": "react",
        "@art-forms/observable": "@art-forms/observable"
    }
}