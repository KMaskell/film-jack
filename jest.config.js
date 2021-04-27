module.exports = {
        // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["./jest.setup.js"],
        // Automatically clear mock calls and instances between every test
        'clearMocks': true,
        // The directory where Jest should output its coverage files
        'coverageDirectory': '.coverage',
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
        "^@pages(.*)$": "<rootDir>/pages$1",
        "^@hooks(.*)$": "<rootDir>/hooks$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
};