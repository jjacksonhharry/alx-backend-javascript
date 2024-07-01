module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
  },
  plugins: {
    jest: {
      all: true,
    },
  },
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ]
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js'
    }
  ]
};
