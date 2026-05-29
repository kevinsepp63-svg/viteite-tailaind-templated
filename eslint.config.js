import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    ...js.configs.recommended,
  },
  {
    rules: {
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: "es5",
      printWidth: 80,
    },
  },
];
