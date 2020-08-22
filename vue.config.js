module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/general.scss"`,
      },
      scss: {
        prependData: `@import "~@/styles/general.scss";`,
      },
    },
  },
};
