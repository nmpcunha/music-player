# Music Player

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![QA Checks](https://github.com/nmpcunha/music-player/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/nmpcunha/music-player/actions/workflows/ci.yaml)

A simple music player web application, inspired by some articles on dev.to.

The main motivation for starting this small project was to try out some stuff and keep up to date with the most recent practices.

## Setup 👨‍💻

Install dependencies:

```bash
npm i
```

## Build 🔨

This project uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing 🧪

This sample uses modern-web.dev's
[@web/test-runner](https://www.npmjs.com/package/@web/test-runner) along with
Mocha, Chai, and some related helpers for testing. See the
[modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview) for
more information.

Tests can be run with the `test` script, which will run your tests against Lit's development mode (with more verbose errors) as well as against Lit's production mode:

```bash
npm test
```

For local testing during development, the `test:watch` command will run your tests in Lit's development mode (with verbose errors) on every change to your source files:

```bash
npm test:watch
```

### E2E Tests 🤖

[Cypress](https://www.cypress.io/) was used to build some integration/end to end tests.

These tests can be run with `test:integration` script:

```bash
npm test:integration
```

For local testing during development, the `test:integration:watch` command would be more useful since it opens a visual Cypress tool and also a "headed" browser.

```bash
npm test:integration:watch
```

## Linting 🧹

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin. Also, [Stylelint](https://stylelint.io/) is being used for checking CSS and general styling.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json`, `tsconfig.json` and `.stylelintrc.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting 🧮

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has been configured to run when committing files, thanks to [Husky](https://typicode.github.io/husky/#/). See the [prettier.io](https://prettier.io/) site for instructions.

## Commits 📝

This repository is [Commitizen](https://commitizen-tools.github.io/commitizen/) friendly and, therefore, uses and respects [Convential Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

In order to help us out with commit messages format the following command can be run:

```bash
npm run cz
```

The usage of `cz` helper is not mandatory but the format of Convential Commits is. Therefore, the commit message is always linted using [Commitlint](https://commitlint.js.org/#/) before being accepted.

## Storybook 🖼️

[Storybook]() is used for demoing some of the project components.

To check it out:

```bash
npm run storybook
```

## Running the Project 💥

Finally, for actually checking the project running the `start` command which will run the project and open it in a new browser tab:

```bash
npm run start
```

This uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To serve your code against Lit's production mode, use `npm run start:build`.

## Tooling configs ⚙️

For most of the tools, the configuration reside in its specific file (e.g. `commitlint.config.js`, `.eslintrc.json`, `.huskyrc.json`, `.prettierrc.json`, `.stylelintrc.json`, `tsconfig.json`) in order to avoid a very big `package.json` containing all the configurations.
