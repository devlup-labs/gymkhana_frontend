module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:8000",
        secure: false
      }
    }
  },
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  },
  assetsDir: "static"
};
