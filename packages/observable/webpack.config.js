const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts"]
    },
    output: {
        path: path.resolve(__dirname, './bundle'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: [
                    // {
                    //     loader: 'babel-loader',
                    //     options: {
                    //         presets: [
                    //             // '@babel/preset-env',
                    //             '@babel/preset-typescript'
                    //         ],
                    //         plugins: [
                    //             ["@babel/plugin-proposal-decorators", { "legacy": true }],
                    //             ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    //         ]
                    //     }
                    // },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
}