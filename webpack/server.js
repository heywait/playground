var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (error, result) {
    if (error) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});