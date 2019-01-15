module.exports = {
  devServer: {
    disableHostCheck: true
  },
  // configureWebpack: (config) => {
  //   config.output.publicPath = 'vueBp/dist'
  // },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vueBp/dist'
    : '/dist/',
}
