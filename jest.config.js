module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/', '<rootDir>/node_modules/'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/packages/(?:.+?)/lib/'],
    setupFilesAfterEnv: ['./setupTests.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '@rainbow-modules/(.*)$': '<rootDir>/packages/$1/src',
    },
};
