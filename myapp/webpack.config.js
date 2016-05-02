module.exports = {
  entry: './components/App.js',
  output: {
    path: './public/javascripts',
    filename: 'index.js'
  },
  module: {
    loaders : [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
        }
      }
    ]
  }
}
