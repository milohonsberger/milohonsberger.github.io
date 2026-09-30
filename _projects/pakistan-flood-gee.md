---
title: Mapping the 2022 Pakistan Floods with Sentinel-1 SAR
type: gee
featured: true
summary: Radar change detection mapping roughly 305,000 hectares of inundation across Dadu District, Sindh, after the August 2022 Pakistan floods.
tags: [Google Earth Engine, Sentinel-1, SAR, Flood Mapping]
thumbnail: /assets/images/flood-analysis-thumb.jpg
links:
  - label: Launch Earth Engine App
    url: https://milohonsberger-geospatial.projects.earthengine.app/view/pakistan-flood-analysis
  - label: View Script
    url: https://code.earthengine.google.com/2977192938a8f42cb5d5cd63434e78eb
---

This project maps flood extent across the Dadu District of Pakistan following
the 2022 flooding event, using Sentinel-1 C-band synthetic aperture radar to
penetrate the storm clouds that caused the flooding. SAR is also well suited to
flood detection because smooth water surfaces reflect the radar signal away from
the sensor, which marks flooded areas clearly as pixels with weak return values.

The analysis compares a pre-flood baseline (1 June – 15 July 2022) against
imagery from the peak of the flooding (20 August – 10 September 2022). Rasters
within these ranges were composited into a single mosaic containing the VV, VH,
and VV/VH ratio bands. The composite of these three bands created two images
which clearly showed water levels pre- and post-flooding. The flooded area
itself was calculated by taking the ratio of the pre- and post-flood VV/VH
bands.

Additional masks were applied to the result to get a more accurate measure of
the flooding extent. These filters removed any previously identified flood
pixels which overlapped permanent water bodies such as lakes, pixels located in
areas with a steep slope, and isolated pixels which can be assumed to be noise.

Ultimately the analysis identified roughly 305,000 hectares of inundation —
about 16% of the district.

