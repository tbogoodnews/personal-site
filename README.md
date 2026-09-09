# Personal site

A small about site built with [Eleventy](https://www.11ty.dev/), with English,
French, German, and Italian versions.
No client-side JavaScript, analytics, external fonts, or theme dependencies.

Published at **https://tbogoodnews.github.io/personal-site/**.

## Local development

Use Node.js 24 or newer.

```sh
npm ci
npm start
```

Open the local URL printed by Eleventy. `npm run build` writes the static
site to `_site`.

## Editing

- `src/index.md`: the English about text.
- `src/fr/index.md`, `src/de/index.md`, `src/it/index.md`: the translations.
- `src/_data/languages.json`: translated metadata and navigation labels.
- `src/_data/experience.json`: work history, dates, and translations.
- `src/_includes/base.njk`: the shared layout and links.
- `src/_includes/experience.njk`: the shared work timeline.
- `src/assets/style.css`: typography and layout.
- `src/assets/portrait.jpg`: the resized, metadata-stripped photo.

Keep the page limited to general professional background and interests.
Do not add contact details, addresses, resume files, internal metrics, or
original photos with location metadata. The GitHub handle is the site identity;
GitHub and LinkedIn are the only external links.

The language switcher is ordinary HTML navigation, with English at `/` and
translations at `/fr/`, `/de/`, and `/it/`. Keep all four versions in sync when
updating the text.

## Publishing

GitHub Pages uses **GitHub Actions** as its source. Pushes to `main` build and
deploy the site automatically; pull requests only run the build. The workflow
gets the site's base path from GitHub Pages, so assets work under the repository
URL as well as at a domain root.

To build for the repository URL locally, set `SITE_PATH_PREFIX=/personal-site/`
before running `npm run build`. Leave it unset for local development.

Only `_site` is uploaded to Pages, not the repository or its source files.
