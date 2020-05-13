module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    coverageReporters: ['html', 'text', 'clover'],
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    setupFilesAfterEnv: ['./setupTests.js'],
};
