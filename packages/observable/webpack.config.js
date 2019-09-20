const path = require('path');
const pathToSrc = path.resolve(__dirname, "./src");

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, './bundle'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: pathToSrc,
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
}