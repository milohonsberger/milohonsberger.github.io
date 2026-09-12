---
title: California NRHP Web Viewer
type: webmap
featured: true
summary: An interactive map of California's National Register of Historic Places buildings and structures, with per-county choropleths.
tags: [Folium, GeoPandas, Python, Leaflet]
links:
  - label: View Project
    url: https://milohonsberger.github.io/California_NRHP_Viewer/
  - label: Source Code
    url: https://github.com/milohonsberger/California_NRHP_Viewer
---

Maps every building and structure on California's National Register of Historic
Places (NRHP), sourced from the NRIS/California SHPO GIS layers, on an
interactive Leaflet map with a USGS Topo basemap and toggleable layers.

Beyond the point map, a spatial join aggregates listings by county to answer a
simple question the raw points can't: where is historic preservation activity
actually concentrated? The result is rendered as two choropleths — one for
buildings, one for structures — each with hover tooltips showing exact counts.

Notable techniques:
- Spatial join (`geopandas.sjoin`) to attribute points to county polygons
- Natural-breaks (Jenks) classification for the building choropleth, chosen
  over equal-interval bins to handle the strong right skew in the data
  (Los Angeles County alone accounts for over a fifth of the state's listings)
- Geometry simplification for rendering, kept separate from the full-detail
  geometry used for the spatial join, to avoid boundary shifts affecting the
  count while still keeping the published page lightweight
