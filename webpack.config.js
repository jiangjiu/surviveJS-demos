var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: path.resolve(ROOT_PATH, 'app/main.js'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css?$/,
                loader: 'style!css',
                include: path.resolve(ROOT_PATH, 'app')
            }
        ]
    },
    resolve:{
        extensions:['','.js','.css']
    },

    plugins: [
        new HtmlwebpackPlugin({
            title: 'Kanban app'
        })
    ]
};

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval',
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    loader: 'react-hot!babel',
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
