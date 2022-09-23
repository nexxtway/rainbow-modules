/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const fs = require('fs');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './lib');
const srcPath = path.join(packagePath, process.env.SRC_PATH || './src');

function typescriptCopy({ from, to }) {
    const files = glob.sync('**/*.d.ts', { cwd: from });
    files.forEach((file) => {
        if (!fs.existsSync(path.resolve(to, file))) {
            fs.copyFileSync(path.resolve(from, file), path.resolve(to, file));
        }
    });
}

function run() {
    typescriptCopy({ from: srcPath, to: buildPath });
}

run();
