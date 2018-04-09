import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};