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
    externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }],
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
