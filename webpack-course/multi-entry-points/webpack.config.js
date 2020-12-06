const path = require('path');
module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    pricing: path.resolve(__dirname, 'src/js/pricing.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  mode: 'development'
}
