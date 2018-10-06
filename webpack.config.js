var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/main/index.html',
    filename: 'index.html',
    inject: 'body'
});

const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    entry: __dirname + '/src/main/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    plugins: [HTMLWebpackPluginConfig]
};