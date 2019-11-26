const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/Container.jsx"),
    output: {
        library: 'react-container',
        libraryTarget: 'umd',
        filename: 'react-container.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};