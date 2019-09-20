const path = require('path');
const pathToArtForms = path.resolve(__dirname, "./../../node_modules/@art-forms");
const pathToSrc = path.resolve(__dirname, "./src");

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        symlinks: false
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
                include: [pathToArtForms, pathToSrc],
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
}