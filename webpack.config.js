const path = require('path');
const mode = process.env['NODE_ENV'] === 'production' ? 'production' : 'development';

module.exports = {
    target: 'node',
    mode: mode,
    entry: './build/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build', 'bundle'),
        filename: 'index.js'
    }
};