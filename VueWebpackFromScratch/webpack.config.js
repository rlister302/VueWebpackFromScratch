const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Need to have an alias for vue or else we get a runtime error since
// the module that is bundled does not have the compiler
module.exports = {
    mode: "development",
    entry: {
        main: './Client/main.ts',
        hello: './Client/HelloWorld.ts'
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            vue$: 'vue/dist/vue.esm'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        library: '[name]',
        libraryTarget: 'var'
    },
    module: {
        rules: [
            { test: /\.ts$/, include: /Client/, use: 'awesome-typescript-loader?silent=false' }
           // { test: /\.js$/, include: /Client/, use: 'awesome-typescript-loader?silent=false' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
       // new BundleAnalyzerPlugin()
    ]
}