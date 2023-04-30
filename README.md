# Turbo Garden

This is an official starter Turborepo.

## Requirements/TODO

- [ ] [Tailwindcss](https://tailwindcss.com/docs/guides/nextjs)
- [ ] CI/CD
  - [ ] Github Actions (lint, test build, docker)
  - [ ] e2e - cypress &| storybook &| [playwright](https://www.youtube.com/watch?v=bsE1VJn1HeU)
  - [ ] Dockerize the two sites (using `turbo prune`, with-docker example)
  - [ ] Deploy to netlify (2 sites)
  - [ ] `npx turbo link`: for [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- Alternate runtimes
  - [ ] deno cli app
  - [ ] go cli app

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
