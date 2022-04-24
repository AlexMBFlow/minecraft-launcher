module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: require('./rules.webpack'),
  },
  loader: {
      test: /\.(css|sass)$/,
      use: ['style-loader','css-loader']
    }
}