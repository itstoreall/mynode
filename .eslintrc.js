export default {
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
    // 'comma-style': [2, 'last'],
  },
};
