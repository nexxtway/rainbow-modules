const isSpecialFile = (fileName) =>
    ['yarn.lock', 'readme.md', 'package.json'].some(
        (specialFile) => specialFile === fileName.toLowerCase(),
    );

export default isSpecialFile;
