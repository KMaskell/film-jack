module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ["react", "prettier"],
  extends: [
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    indent: [4, "tab"],
    "no-unused-vars": [2, { vars: "all", args: "all" }],
  },
};
