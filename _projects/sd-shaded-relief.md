---
title: Shaded Relief of San Diego County
type: staticmap
featured: true
summary: A hypsometric shaded-relief map of San Diego County, from the Pacific coast to the Peninsular Ranges and the eastern desert, built from USGS 3DEP elevation data in QGIS.
tags: [QGIS, Cartography, DEM, Hillshade, GDAL]
thumbnail: /assets/images/sd-relief-thumb.jpg
links: []
---

The figure showcases the terrain of San Diego County along with several notable
places of interest. The locations include cities and towns along the coastline
as well as San Diego County's most notable peaks.

The map was created in QGIS, primarily using Digital Elevation Model rasters
sourced from USGS. Four DEMs were merged into a single mosaic and then clipped
to the county boundary. A custom color ramp was applied with manual breaks to
create the gradient on display. The mosaic DEM was then used to create a
hillshade, which was displayed on top of the DEM with the Multiply blend mode
and 50% transparency. This was done to emphasize the terrain of the county
while maintaining the custom gradient.

Finally, a vignette was created to emphasize the separation of the elevation
model from the basemap. The peaks, cities, and rivers shown were sourced from
the California State Geoportal.
