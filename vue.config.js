module.exports = {
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
