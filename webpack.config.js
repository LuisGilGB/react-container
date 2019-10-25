const path = require('path');

module.exports = {
    entry: './src/Container.jsx',
    output: {
        library: 'react-container',
        libraryTarget: 'umd',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    }
}