const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.browser,
        },
        ...js.configs.recommended,
        rules: {
            semi: ['error', 'always'],
        },
    },
];

