#!/usr/bin/env node

const { resolve: resolvePath } = require('path');
const { readFileSync } = require('fs');

const rootPath = resolvePath(__dirname, '..');

require(resolvePath(rootPath, JSON.parse(readFileSync(resolvePath(rootPath, '.knosysrc'), 'utf8').toString().trim()).$path)).execute();
