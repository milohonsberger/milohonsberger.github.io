---
title: San Diego County Fire History, 1950–2025
type: webmap
featured: true
summary: An animated, cumulative web map of every mapped wildfire in San Diego County since 1950, built with MapLibre GL JS.
tags: [MapLibre GL JS, JavaScript, GeoPandas, Python, Fire]
thumbnail: /assets/images/sd-fire-history-thumb.jpg
links:
  - label: View Map
    url: https://milohonsberger.github.io/sd-fire-history/
  - label: Source Code
    url: https://github.com/milohonsberger/sd-fire-history
---

This project tracks and visualizes wildfires in San Diego County from 1950 through 2025. Data was sourced from the CAL FIRE FRAP dataset and the California State Geoportal. Data pre-processing was done in Python using GeoPandas and pandas. This primarily entailed querying for any fire perimeters that intersected the San Diego County boundary and simplifying polygons so they could be pushed to GitHub. Additionally, the original fire cause codes were replaced with their actual values from a dictionary built by referencing the CAL FIRE domains table, which is included when downloading the data from the CAL FIRE portal.

The web map is built in JavaScript with MapLibre GL JS. The time dimension is one filter expression, `year <= selected year`, and one color expression which highlights fires in the selected year, both of which are re-applied on each slider step. The total burned acres of the selected year are displayed, as well as a running total of burned area starting from 1950.

