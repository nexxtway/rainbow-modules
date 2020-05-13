module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    setupFilesAfterEnv: ['./setupTests.js'],
};
