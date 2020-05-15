module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    setupFilesAfterEnv: ['./setupTests.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
    },
};
