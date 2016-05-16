/// <binding BeforeBuild='Run - Development' />
var path = require('path')
var webpack = require('webpack')

var paths = {
    webroot: "./wwwroot/"
}

module.exports = {
    entry: {
        main: [
        'babel-polyfill',
        paths.webroot + 'scripts/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, paths.webroot + 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    }
};