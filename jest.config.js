// ALWAYS


// noinspection JSUnusedGlobalSymbols
export default ({


    testMatch: [
        '<rootDir>/tst/**/*.(spec|test).js',
    ],

    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
    ],

    coverageReporters: [
        'json',
        'lcov',
        'text',
        'text-summary',
    ],


    transform: {},

});
