module.exports = {
  devServer: {
	//本地主机
    host: 'localhost',
	//端口号
    port: 8088,
    https: false,
    open: true,
    hotOnly: true
  },
  outputDir: './dist',
  assetsDir: './assets/',
  publicPath: './',
  indexPath: './index.html',
  transpileDependencies: ['vuetify']
}