var HtmlWebpackPulgin = require('html-webpack-plugin');
var HtmlWebpackPulginConfig = new HtmlWebpackPulgin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const webpack = require('webpack')
const jQuery = new webpack.ProvidePlugin({
  jquery:'jquery',
  $:'jquery',
  jQuery:'jquery'
});

module.exports = {
  entry: [
    './app/index.js'
  ],

  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.woff$|\.eot$|\.ttf$|\.woff2$/, loader: "file-loader"}
    ]
  },
  plugins: [HtmlWebpackPulginConfig,jQuery],
  resolve:["",".js"]
}
