module.exports = {
  root: true,
   parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'standard',
  ],
  env: {
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'comma-dangle': [2, 'always-multiline'],
  },
  overrides: [
    {
      files: [
        'cypress/support/*.{js,ts,jsx,tsx}',
        'cypress/integration/*.{spec,e2e}.{js,ts,jsx,tsx}',
        'src/**/*.ct.{js,ts,jsx,tsx}',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
    {
      files: [
        'src/**/*.{spec,test}.{js,ts,jsx,tsx}',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
