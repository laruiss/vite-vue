# Unofficial template to create Vue 3 apps

This is a work in progress. Any comment is welcome.


## What is included

- [Vue 3](https://v3.vuejs.org/)
- [Vuex 4](https://next.vuex.vuejs.org/)
- [Vue-router 4](https://next.vue-router.vuejs.org/)
- [Vite 2](https://vitejs.dev/)
- [ESlint](https://eslint.org/) with [standardjs](https://standardjs.com/) [config](https://www.npmjs.com/package/eslint-config-standard) (with one modification: [`"comma-dangle": [2, "always-multiline"]`](https://eslint.org/docs/rules/comma-dangle#always-multiline))
- [FontAwesome](https://fontawesome.com/) (with [vue-fontawesome@next](https://github.com/FortAwesome/vue-fontawesome))
- [Tailwind](https://tailwindcss.com/) (with [@tailwind/jit](https://www.youtube.com/watch?app=desktop&v=3O_3X7InOw8))
- [Cypress](https://www.cypress.io/) 6 already set up
- [Jest](https://jestjs.io/) set up


## Run the dev server

```
npm run dev
```

## Run the tests with jest

```
npm test
```

## Run End-to-end tests with cypress

```
npm run test:e2e
```

## Run End-to-end tests with cypress and watch for changes in app code

```
npm run watch:e2e
```

## Run End-to-end tests with cypress in CI mode (headless)

```
npm run test:e2e-ci
```

## Build and see a preview of the production code

```
npm run preview
```

## See a preview of already built code

```
npm run serve
```
