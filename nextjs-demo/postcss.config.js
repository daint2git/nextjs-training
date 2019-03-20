// module.exports = {
//   plugins: {
//     'postcss-css-variables': {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [require('postcss-css-variables'), require('autoprefixer')],
}
