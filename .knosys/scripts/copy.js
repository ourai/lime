const { resolve: resolvePath } = require('path');

const { copyThemeAssets } = require('./helper');

module.exports = {
  execute: (type = 'jekyll') => {
    const srcRoot = resolvePath(__dirname, '../../src');

    if (type === 'jekyll') {
      return copyThemeAssets(`${srcRoot}/jekyll/_assets`);
    }

    if (type === 'hexo') {
      return copyThemeAssets(`${srcRoot}/hexo/themes/lime/source`, true);
    }
  },
};
