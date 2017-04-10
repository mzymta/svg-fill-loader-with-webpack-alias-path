var path = require("path");

module.exports = {
    entry: './dist/main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.svg\?fill=/,
                loaders: [
                    'svg-url-loader',
                    'svg-fill-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'my-folder': path.resolve(__dirname, 'my-folder')
        }
    }
};