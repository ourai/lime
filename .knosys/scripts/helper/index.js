const knosysUtils = require('./knosys');

const { resolveRootPath, ensureDirExists, copyFileDeeply, readData, saveData } = knosysUtils;

function copyThemeAssets(distRoot, polyfill) {
  ['fonts', 'images', 'javascripts', 'stylesheets'].forEach(dirName => {
    const assetsPath = `${distRoot}/${dirName}`;

    ensureDirExists(assetsPath);

    const srcPath = `${resolveRootPath()}/src/shared/${dirName}`;
    const distPath = `${distRoot}/${dirName}/ksio`;

    ensureDirExists(distPath, true);
    copyFileDeeply(srcPath, distPath, polyfill ? [] : ['polyfills']);
  });

  const distStyleDirPath = `${distRoot}/stylesheets/ksio/`;

  const shareSnsStyleFilePath = `${distStyleDirPath}/vendors/share.scss`;
  const shareSnsStyleFileContent = readData(shareSnsStyleFilePath);

  if (!polyfill) {
    return saveData(shareSnsStyleFilePath, shareSnsStyleFileContent.replace(new RegExp('fonts/vendors/share', 'g'), 'ksio/vendors/share'));
  }

  saveData(shareSnsStyleFilePath, shareSnsStyleFileContent.replace(new RegExp('fonts/vendors/share', 'g'), '../../../fonts/ksio/vendors/share').replace(new RegExp('font-url', 'g'), 'url'));

  const faStyleFilePath = `${distStyleDirPath}/polyfills/_font-awesome-sprockets.scss`;

  saveData(faStyleFilePath, readData(faStyleFilePath).replace(' font-path($path)', ' "../fonts/ksio/polyfills/#{$path}"'));

  ['_all', '_bootstrap-custom', '_helper', '_painter'].forEach(fileName => {
    const filePath = `${distStyleDirPath}/${fileName}.scss`;
    const bsStr = fileName === '_all' ? 'bootstrap-sprockets' : 'bootstrap';

    saveData(
      filePath,
      readData(filePath)
        .replace(new RegExp('@import "compass', 'g'), '@import "./polyfills/compass')
        .replace(new RegExp(`@import "${bsStr}`, 'g'), `@import "./polyfills/${bsStr}`)
        .replace(new RegExp('@import "font-awesome', 'g'), '@import "./polyfills/font-awesome'),
    );
  });
}

module.exports = { copyThemeAssets, ...knosysUtils };
