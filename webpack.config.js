const path = require('path');

module.exports = {
  mode: 'development',
  entry: './PreEntrega1ARAMAYO/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

  