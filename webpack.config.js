var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;

var common = {
    entry: path.join(__dirname, 'app/main'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module:{
        loaders:[{
            test:/\.css$/,
            loader:'style!css',
            include:path.join(__dirname,'app')
        }]
    }
};

if(TARGET === 'start'||!TARGET){
    module.exports = merge(common,{
        devtool:'eval-source-map',
        devServer:{
            historyApiFallback:true,
            hot:true,
            inline:true,
            progress:true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}
