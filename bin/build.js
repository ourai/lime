const { resolve: resolvePath } = require('path');

const { ensureDirExists, copyFileDeeply, readData, saveData, execute } = require('./helper');

const SRC_ROOT = resolvePath(__dirname, '../src');
const SA_ROOT = `${SRC_ROOT}/standalone`;
const JEKYLL_ROOT = `${SRC_ROOT}/jekyll`;

function buildJekyllAssets() {
  ['fonts', 'images', 'javascripts', 'stylesheets'].forEach(dirName => {
    const assetsPath = `${JEKYLL_ROOT}/_assets/${dirName}`;

    ensureDirExists(assetsPath);

    const srcPath = `${SA_ROOT}/${dirName}`;
    const distPath = `${JEKYLL_ROOT}/_assets/${dirName}/ksio`;

    ensureDirExists(distPath, true);
    copyFileDeeply(srcPath, distPath);
  });

  const shareSnsStyleFilePath = `${JEKYLL_ROOT}/_assets/stylesheets/ksio/vendors/share.scss`;

  saveData(shareSnsStyleFilePath, readData(shareSnsStyleFilePath).replace(new RegExp('fonts/vendors/share', 'g'), 'ksio/vendors/share'));
}

module.exports = {
  execute: (type = 'doc') => {
    if (type === 'doc') {
      return execute('generate');
    }

    if (type === 'jekyll') {
      return buildJekyllAssets();
    }
  },
};
