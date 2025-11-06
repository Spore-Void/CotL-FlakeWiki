# Contributing

_This project may not be consistently maintained_

The wiki is built using [Vitepress](https://vitepress.dev/), refer to its documentation for syntax and configuration.

The site is automatically deployed to Github Pages using the main branch.

General things to watch out for:

- Leave out the file extensions when linking to another page.\
  ❌ Don't do this: `[Common Problems](/getting-started/4-common-problems.md)`

When creating, moving or renaming a page, ensure:

- The headline matches the name of the page.
- Update the sidebar navigation at `docs\.vitepress\config.mts`
- to also update the header navigation or homepage links if applicable (`docs\.vitepress\config.mts` and `docs\index.md`)
