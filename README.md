# Turbo Garden

This is an official starter Turborepo.

## Requirements/TODO

- [x] a nextjs site
  - [ ] to test things like libraries
- [ ] a nextra site for docs <-- FAILED
- [ ] I want tailwindcss
- [ ] I want a deno cli app
- [ ] I want to dockerize the two sites
- [ ] I want e2e - cypress &| storybook
  - [ ] with actual tests
- [ ] I want to deploy to vercel (2 sites)
- [ ] I want to deploy to netlify (2 sites)
- [ ] `npx turbo link`: for [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)

## Usage

- `pnpm dev`
- `pnpm test`
- `pnpm lint`
- format: check, write ?

And when we have site and docs:

- Dev: `nx serve site-garden`
- Test: `nx test site-garden` to execute the unit tests via [Jest](https://jestjs.io).
- E2E: `nx e2e site-garden-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

## Setup

This repos was created with the following command:

```sh
npx create-turbo@latest
```

As generated this Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
