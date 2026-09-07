# milohonsberger.github.io

Portfolio site built with Jekyll, hosted on GitHub Pages. Showcases:

- **Web Maps** — interactive maps built in Jupyter (Folium/ipyleaflet), linked to a
  rendered notebook (nbviewer/Colab).
- **Google Earth Engine** — published Earth Engine Apps.
- **Static Maps** — cartography from QGIS/ArcGIS or Python.

## Adding a project

Add a new Markdown file under [`_projects/`](_projects/), copying whichever example
file matches the project type:

- [`_projects/example-webmap.md`](_projects/example-webmap.md)
- [`_projects/example-gee.md`](_projects/example-gee.md)
- [`_projects/example-staticmap.md`](_projects/example-staticmap.md)

Set `type` to `webmap`, `gee`, or `staticmap` — the home page automatically lists the
project under the matching section. Put images in [`assets/images/`](assets/images/).

Once you've added your own projects, delete the three `example-*.md` files.

## Local preview

Requires Ruby + Bundler.

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deployment

GitHub Pages builds this repo automatically with Jekyll on every push to `main` —
no GitHub Actions workflow needed. Make sure the repo's **Settings → Pages** source
is set to "Deploy from a branch" → `main` / `(root)`.
