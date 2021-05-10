const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
    publicPath: "/public/js/",
    watchContentBase: true
  },
  module: {

    rules: [{
        test: /\.js$/,
        exclude: /(node_modules, js)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        options: {
          esModule: true,
        },
        type: 'javascript/auto',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './json/idioma.json',
          to: './public/json' // copies all files to dist/assets
        }
      ]
    })
]
}
