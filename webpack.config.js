var path = require('path'),
    config = {
    entry: './client/index',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [
            '',
            '.webpack.js',
            '.web.js',
            '.ts',
            '.tsx',
            '.js',
            '.json'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'client')
            }
        ]
    }
};

module.exports = config;