const { pick } = require('@ntks/toolbox');

const { resolveRootPath, ensureDirExists, copyFileDeeply, rm, cp, saveData, execute, copyThemeAssets } = require('./helper');

const prjRoot = resolveRootPath();
const srcRoot = `${prjRoot}/src`;
const distRoot = `${prjRoot}/dist`;

function copyMetaFiles(dirName) {
  const distDir = `${distRoot}/${dirName}`;
  const readmeTemplate = `# [Lime](https://ourai.github.io/lime/)

A simple, readable, responsive theme that:

- audience experience first design
- born for blogs, personal websites and API docs
- supports most of PC and mobile modern web browsers

## Getting Started

Please follow the documentation [on the website](https://ourai.github.io/lime/).
`;

  saveData(`${distDir}/README.md`, readmeTemplate);
  cp(`${prjRoot}/CHANGELOG.md`, `${distDir}/`);
}

function copyJekyllFiles() {
  const jekyllSrcRoot = `${srcRoot}/jekyll`;
  const jekyllDistRoot = `${distRoot}/jekyll`;

  ensureDirExists(jekyllDistRoot, true);

  ['_includes', '_layouts'].forEach(dirName => {
    const distPath = `${jekyllDistRoot}/${dirName}/ksio`;

    ensureDirExists(distPath, true);
    copyFileDeeply(`${jekyllSrcRoot}/${dirName}/ksio`, distPath);
  });

  copyThemeAssets(`${jekyllDistRoot}/_assets`);
  copyMetaFiles('jekyll');
}

function copyHexoFiles() {
  const hexoSrcRoot = `${srcRoot}/hexo/themes/lime`;
  const hexoDistRoot = `${distRoot}/hexo`;

  ensureDirExists(hexoDistRoot, true);
  copyFileDeeply(hexoSrcRoot, hexoDistRoot, ['source']);
  rm(`${hexoDistRoot}/*/_local`);

  copyThemeAssets(`${hexoDistRoot}/source`, true);

  const pkgFields = pick(require(`${prjRoot}/package.json`), ['version', 'description', 'repository', 'author', 'license', 'bugs', 'homepage', 'dependencies', 'peerDependencies']);

  saveData(`${hexoDistRoot}/package.json`, JSON.stringify({
    name: 'hexo-theme-lime',
    main: 'package.json',
    keywords: ['hexo', 'theme', 'lime', 'knosys', 'ksio'],
    ...pkgFields,
  }, null, 2));
  copyMetaFiles('hexo');
}

module.exports = {
  execute: (type = 'doc') => {
    if (type === 'doc') {
      return execute('generate');
    }

    if (type === 'jekyll') {
      return copyJekyllFiles();
    }

    if (type === 'hexo') {
      return copyHexoFiles();
    }
  },
};
