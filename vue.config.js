const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        // TODO
        //
        // Note below currently is not needed and does nothing
        // Hack to work around the fact that Toolkit npm artifact isn't distributed in a usable structure
        // this overrides incorrect relative paths
        '../node_modules/open-sans-fontface': resolve('node_modules/ptdv-style-guide/node_modules/open-sans-fontface')
      }
    },
  },

  // css: {
  //   loaderOptions: {
  //     // pass options to sass-loader
  //     sass: {
  //       // @/ is an alias to src/
  //       // so this assumes you have a file named `src/variables.scss`
  //       // data: `@import "~/@chat-app/src/styles.scss;`,
  //     }
  //   }
  // }
}
