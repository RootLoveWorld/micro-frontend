const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[contenthash].js',
      publicPath: isProduction ? '/' : 'http://localhost:3003/',
      library: 'vue3SubApp',
      libraryTarget: 'umd',
      clean: true
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.vue']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    devServer: {
      port: 3003,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      historyApiFallback: true
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};