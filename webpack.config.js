var webpack = require('webpack');
var path = require('path');
var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './client/index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
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