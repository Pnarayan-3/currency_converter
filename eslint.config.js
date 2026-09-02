import globals from "globals";

export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      globals: globals.browser
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn"
    }
  }
];