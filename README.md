# Turbo Garden

This is an official starter Turborepo.

## Requirements/TODO

- [x] a nextjs site
  - [x] with a shared component library
- [ ] a nextra site for docs
  - [x] `pnpm i nextra nextra-theme-docs`
  - [x] with a shared component library
  - [ ] with a shared component library - with state
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
  - `pnpm dev --filter docs`
- `pnpm test`
- `pnpm lint`
- format: check, write ?

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
