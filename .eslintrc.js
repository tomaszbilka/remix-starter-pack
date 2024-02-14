/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['__mocks__/*', '__tests__/*'],
  plugins: ['unicorn', 'cypress'],
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/jest',
    '@remix-run/eslint-config/node',
    'plugin:cypress/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': [
      'error',
      {
        allow: ['info', 'error'],
      },
    ],
    'no-shadow': 'off',
    'no-undef': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'react/display-name': 'off',
    'react/no-array-index-key': 'warn',
    'require-await': 'off',
  },
};
