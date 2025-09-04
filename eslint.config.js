import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ["webpack.common.js", "webpack.dev.js", "webpack.prod.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly"
      }
    }
  },
  {
    files: ["src/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        document: "readonly"
      }
    }
  }
];
