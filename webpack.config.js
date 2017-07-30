var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/assets/javascripts');
var APP_DIR = path.resolve(__dirname, 'app/assets/ui');

var config = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx/, loader: "babel-loader", query:{presets:['react']}}
        ]
    }
};

module.exports = config;
