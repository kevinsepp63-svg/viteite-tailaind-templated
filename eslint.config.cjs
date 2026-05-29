const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    files: ['**/*.{js,mjs}'],
    ignores: ['node_modules/**', 'dist/**'],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettier.rules,
      semi: ['error', 'always'],
    },
  },
  {
    files: ['**/*.cjs', 'vite.config.js'],
    ignores: ['node_modules/**', 'dist/**'],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'script',
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettier.rules,
      semi: ['error', 'always'],
    },
  },
];
