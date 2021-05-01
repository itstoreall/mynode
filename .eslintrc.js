export default {
  parser: '@babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    semi: [1, 'always'],
    'comma-dangle': 'off',
    'space-before-function-parent': 0,
    // 'comma-style': [2, 'last'],
  },
};
