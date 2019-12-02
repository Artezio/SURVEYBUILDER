const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        globalObject: 'this',
        libraryTarget: 'umd',
        library: 'FhirConverter',
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
        "@surveybuilder/models": "@surveybuilder/models"
    }
}