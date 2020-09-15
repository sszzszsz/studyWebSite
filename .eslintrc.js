module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // scssを使うには↓の2つがないと@mixinとかでエラーになってしまう。
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,
    // prettierの設定
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
}
