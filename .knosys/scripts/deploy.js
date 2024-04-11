const { resolve: resolvePath } = require('path');
const { execSync } = require('child_process');

const { rm, execute } = require('./helper');

const prjRoot = resolvePath(__dirname, '../..');
const distRoot = `${prjRoot}/dist`;

function zipTheme(dirName) {
  const fileName = `${dirName}-theme-lime.zip`;

  rm(`${distRoot}/${fileName}`);
  execSync(`zip -rm ${fileName} ${dirName}`, { stdio: 'inherit', cwd: distRoot });
}

module.exports = {
  execute: (type = 'site', alias) => {
    if (type === 'site') {
      return execute('site', 'deploy');
    }

    if (type !== 'pkg') {
      return;
    }

    const pkgs = [];

    if (alias) {
      if (['jekyll', 'hexo'].includes(alias)) {
        pkgs.push(alias);
      }
    } else {
      pkgs.push('jekyll', 'hexo');
    }

    if (pkgs.length === 0) {
      return;
    }

    pkgs.forEach(pkg => {
      execSync(`npm run build ${pkg}`, { stdio: 'inherit', cwd: prjRoot });

      if (pkg === 'hexo') {
        execSync('npm publish', { stdio: 'inherit', cwd: `${distRoot}/hexo` });
      }

      zipTheme(pkg);
    });
  },
};
