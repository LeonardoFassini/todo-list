module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint", "react"],
  rules: {
    "react/display-name": "off",
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
};
