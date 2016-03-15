var path = require('path');
var glob = require('glob');
var webpack = require('webpack');

module.exports = {
    entry: (function() {
        var entry = {};
        glob.sync('./src/index.js').forEach(function(name) {
            var key = name.replace('index.js', 'sinaface.min.js');
            entry[key] = name;
        });
        return entry;
    }()),
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'html-loader'
        }
        // , {
        //     // test: /\.css$/,
        //     // loader: "style!css"
        // }
        ]
    },
    output: {
        // libraryTarget: 'amd',
        path: __dirname,
        filename: "[name]"
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new ExtractTextPlugin('styles.css')
        new webpack.optimize.UglifyJsPlugin()
    ]
};