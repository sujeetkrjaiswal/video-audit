const path = require('path')
const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

function srcPaths(src) {
  return path.join(__dirname, '..', src)
}

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      '@main': srcPaths('src/main'),
      '@models': srcPaths('src/models'),
      '@renderer': srcPaths('src/renderer'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.json'],
  },
}
