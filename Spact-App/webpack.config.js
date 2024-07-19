const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.sp',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/, // Assuming you have a loader for .sp files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [], // Disable clean-webpack-plugin during development
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true, // Ensure HtmlWebpackPlugin injects script tags into the HTML
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // Add this line to handle routing with webpack-dev-server
  },
};