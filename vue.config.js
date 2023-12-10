const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    publicPath:'/portfolio/',
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  chainWebpack: config => {
    // Add a rule to handle PDF files using file-loader
    config.module
        .rule('pdf')
        .test(/\.(pdf)$/i)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: '', // Output path for PDF files
        })
        .end();
  },
})
