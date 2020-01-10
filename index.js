module.exports = {
  extends: ['airbnb'],
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
    'max-len': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-destructuring': ['error', { object: true, array: false }],
  },
};
