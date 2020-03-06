const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassWebpackPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {
    // check if we are in development mode or not
    const dev = argv.mode === 'development';

    return ({
        // set the mode of our project
        mode: argv.mode,

        entry: './src/scripts/app.js',
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        SassWebpackPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new SassWebpackPlugin({
                filename: '[name].css'
            })
        ],

        devServer: {
            port: process.env.PORT || 8080,
            contentBase: './src',
            historyApiFallback: false,
        },
    });
};