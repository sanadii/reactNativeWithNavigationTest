const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
};
