module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    indent: ['error', 2],
    semi: ['error'],
    quotes: ['error', 'single'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'none', 'all'],
        allowSeparatedGroups: true,
      },
    ],
    'linebreak-style': 'unix',
  },
};
