const webpack = require('webpack');

module.exports = {
  entry: [
    './app/config.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'config.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URI: JSON.stringify(process.env.API_URI || 'http://localhost:3000/')
    })
  ]
};
