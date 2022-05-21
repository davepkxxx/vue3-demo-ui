module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
  ],
  rules: {
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
  },
};
