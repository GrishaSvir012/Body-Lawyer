module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'arrow-body-style': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-no-constructed-context-values': 0,
    'default-param-last': 0,
    'react/no-multi-comp': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    'comma-dangle': 0, // not sure why airbnb turned this on. gross!
    'no-console': 0,
    'no-alert': 0,
    'linebreak-style': 0,
    'eslint-disable-next-line': 0,
    'react/jsx-props-no-spreading': 0,
    'no-restricted-syntax': 0,
    'o-case-declarations': 0,
  },
};
