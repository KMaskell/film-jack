module.exports = {
    'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    },
    'extends': [
    'plugin:react/recommended',
    'google',
    ],
    'parserOptions': {
    'ecmaFeatures': {
        'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
    },
    'plugins': [
    'react',
    ],
    'rules': {
        'indent': [4, "tab"],
        "no-unused-vars": [2, {"vars": "all", "args": "all"}]
    },
};
