module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'import'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-console': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-promise-reject-errors': 0,

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 0,

    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/jsx-key': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/no-array-index-key': 0,
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'import/no-anonymous-default-export': 0,
        'react/function-component-definition': 0,
      },
    },
  ],
}
