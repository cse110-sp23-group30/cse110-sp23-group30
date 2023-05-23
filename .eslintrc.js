module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'plugin:vue/vue3-essential',
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
