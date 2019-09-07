module.exports = {
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    window: false,
    document: false,
  },
  rules: {
    'max-len': [0],
    'import/no-unresolved': [0],
    'no-console': [2, { "allow": ["warn", "error"] }],
    'no-param-reassign': [0],
    'arrow-parens': [2, 'as-needed'],
    'prefer-destructuring': ["error", { "object": true, "array": false }],
    'react/jsx-filename-extension': [0],
  }
}