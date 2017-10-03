const path = require('path')
const R = require('ramda')

const base = require('./webpack.config.js')

const config = {
  target: 'web',
  output: {
    path: path.join(__dirname, './browser'),
    library: 'yarpex',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'yarpex.js',
    sourceMapFilename: 'yarpex.js.map',
  },
}

module.exports = R.merge(base, config)
