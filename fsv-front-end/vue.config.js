const { defineConfig } = require("@vue/cli-service");
(module.exports = {
  devServer: {
    proxy: "http://localhost:8000",
  },
}),
  defineConfig({
    transpileDependencies: true,
  });
