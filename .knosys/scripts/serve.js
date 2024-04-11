const { resolve: resolvePath } = require('path');
const { execSync } = require('child_process');

const { execute } = require('./helper');

module.exports = {
  execute: (type = 'jekyll') => {
    if (type === 'hexo') {
      return execSync('npm run server', { cwd: resolvePath(__dirname, '../../src/hexo'), stdio: 'inherit' });
    }

    execute('site', 'serve');
  }
};
