module.exports = {
  env: {
    'shared-node-browser': true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-restricted-syntax': 'off',
    'no-restricted-exports': 'off',
    'no-param-reassign': 'off',
  },
  plugins: [
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
};