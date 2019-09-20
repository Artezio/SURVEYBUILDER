const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.resolve(__dirname, './bundle'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/, use: [
                    {
                        loader: 'ts-loader'
                        // loader: 'babel-loader',
                        // options: {
                        //     presets: [
                        //         // '@babel/preset-env',
                        //         '@babel/preset-react',
                        //         '@babel/preset-typescript'
                        //     ],
                        //     plugins: [
                        //         ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        //         ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        //     ]
                        // }
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
}