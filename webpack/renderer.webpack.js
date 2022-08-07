module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {"path": false},

  },
  module: {
    rules: require('./rules.webpack'),
  },
}