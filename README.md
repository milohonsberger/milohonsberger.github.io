# milohonsberger.github.io

Portfolio site built with Jekyll, hosted on GitHub Pages. Showcases:

- **Web Maps** — interactive maps built in Jupyter (Folium/ipyleaflet), linked to a
  rendered notebook (nbviewer/Colab).
- **Google Earth Engine** — published Earth Engine Apps.
- **Static Maps** — cartography from QGIS/ArcGIS or Python.

## Pages

- `/` ([index.html](index.html)) — hero + a carousel of featured projects
- `/about/` ([about.md](about.md)) — bio
- `/resume/` ([resume.md](resume.md)) — resume content / PDF download
- `/portfolio/` ([portfolio.html](portfolio.html)) — full project listing, grouped by
  Web Maps / Earth Engine / Static Maps

## Adding a project

Every project is one Markdown file under [`_projects/`](_projects/), regardless of
format. They all render identically — as a card in the grid/carousel and as a detail
page. The format only decides which buttons appear.

Copy whichever example is closest:

- [`_projects/example-webmap.md`](_projects/example-webmap.md)
- [`_projects/example-gee.md`](_projects/example-gee.md)
- [`_projects/example-staticmap.md`](_projects/example-staticmap.md)

### Front matter

| Field | Purpose |
| --- | --- |
| `title` | Project name. |
| `type` | Which Portfolio section it lands in (see below). |
| `summary` | One line, shown on the card and carousel. |
| `tags` | List of short labels, rendered as pills. |
| `thumbnail` | Card image, also used as the hero on the detail page. |
| `featured` | `true` puts it in the home page carousel. |
| `links` | List of `{label, url}` — rendered as buttons, first one primary. |
| `images` | Optional list of images, rendered as a gallery. |
| `embed_url` | Optional inline iframe. Many hosts block framing — test it. |

`links` is format-agnostic, so a project can expose any combination of artifacts:

```yaml
links:
  - label: View Notebook
    url: https://nbviewer.org/github/<user>/<repo>/blob/main/notebooks/x.ipynb
  - label: Launch Earth Engine App
    url: https://ee-<username>.projects.earthengine.app/view/<app-name>
  - label: Source Code
    url: https://github.com/<user>/<repo>
```

The older `notebook_url` / `app_url` / `code_url` fields still work, but only as a
fallback when `links` is absent. Prefer `links`.

### Adding a new format

Add an entry to `project_categories` in [`_config.yml`](_config.yml):

```yaml
project_categories:
  - type: storymap
    title: Story Maps
    note: Narrative cartography built in ArcGIS StoryMaps.
```

No template changes needed. Projects whose `type` matches no category still appear,
under a catch-all "Other Projects" section, so nothing silently disappears.

Put images in [`assets/images/`](assets/images/). Once you've added real projects,
delete the three `example-*.md` files.

## Local preview

Preview changes before pushing. This mirrors the GitHub Pages build (the
`github-pages` gem pins the same Jekyll version production uses), so what you see
locally is what deploys.

### Docker (recommended on Windows)

Start Docker Desktop, then:

```sh
docker compose up
```

Open http://localhost:4000. Edits rebuild automatically and the browser
live-reloads. Stop with Ctrl+C, or `docker compose down`.

The first run installs gems and takes a few minutes; they're cached in a named
volume afterwards, so later starts are quick.

### Native Ruby (alternative)

Requires Ruby + DevKit (`winget install RubyInstallerTeam.RubyWithDevKit`):

```sh
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

## Gotcha: assets and front matter

Files under `assets/` must **not** have YAML front matter (the `---` block).
`_config.yml` sets a blanket `layout: default`, so any file carrying front matter
gets wrapped in the site layout — which serves an HTML page at the `.css`/`.js`
URL and silently breaks the site. There's a scoped `layout: none` override for
`assets` as a guard, but the simplest rule is: no front matter on assets.

## Deployment

GitHub Pages builds this repo automatically with Jekyll on every push to `main` —
no GitHub Actions workflow needed. Make sure the repo's **Settings → Pages** source
is set to "Deploy from a branch" → `main` / `(root)`.
