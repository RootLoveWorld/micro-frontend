const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[contenthash].js',
      publicPath: isProduction ? '/' : 'http://localhost:3004/',
      library: 'svelteSubApp',
      libraryTarget: 'umd',
      clean: true
    },
    resolve: {
      extensions: ['.ts', '.js', '.svelte'],
      conditionNames: ['svelte', 'browser', 'import', 'require', 'node'] // Added 'svelte' as recommended
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: !isProduction
              },
              emitCss: !isProduction,
              hotReload: !isProduction
            }
          }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: [/node_modules/, /\.d\.ts$/],
          use: {
            loader: 'ts-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    devServer: {
      port: 3004,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      historyApiFallback: true
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};