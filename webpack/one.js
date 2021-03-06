const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    reles: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.scss$, use: ['style-loader', 'css-loader', 'sass-loader'
      ]}
    ]
  },
  module: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
