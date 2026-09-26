---
title: Shaded Relief of San Diego County
type: staticmap
featured: false
published: false # flip to true (or delete this line) once the map + thumbnail exist
summary: A hypsometric shaded-relief map of San Diego County, from the Salton Sea trough to the Pacific, built from USGS 3DEP elevation data.
tags: [QGIS, Cartography, DEM, Hillshade]
thumbnail: /assets/images/sd-relief-thumb.jpg
images:
  - /assets/images/sd-relief-full.jpg
links: []
---

A terrain map of San Diego County showing the full elevation gradient in about
60 miles: coastal mesas, the Peninsular Ranges rising past 6,000 feet at Hot
Springs Mountain and Cuyamaca Peak, and the drop east into the Anza-Borrego
desert.

## Data

- **Elevation** — USGS 3DEP 1 arc-second DEM (four tiles, mosaicked)
- **County boundary** — <!-- SanGIS / Census TIGER -->
- **Labeled features** — <!-- GNIS summits, hydrography, municipalities -->

## Method

<!-- Fill in after building: mosaic → reproject → clip → multidirectional
hillshade → hypsometric tint → multiply blend → labels → layout. Note the
design choices (projection, ramp breaks, z-factor, label hierarchy). -->

## Design notes

<!-- Why this ramp, why this projection, what got left off the map and why. -->
