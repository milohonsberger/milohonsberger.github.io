---
title: NDVI Difference Pre and Post California Border Fire
type: gee
featured: true
summary: A Sentinel-2 change-detection analysis of the 2016 California Border Fire, differencing NDVI between pre- and post-fire scenes.
tags: [Google Earth Engine, Remote Sensing, NDVI, Fire]
thumbnail: /assets/images/boderfire_thumb.jpg
links:
  - label: Launch Earth Engine App
    url: https://glenora-banners.projects.earthengine.app/view/borderfire-ndvi
  - label: View Script
    url: https://code.earthengine.google.com/?scriptPath=users%2Fmilohonsberger%2Fboderfire%3AChangeDetection
# A project can mix formats freely — if this analysis also has a notebook,
# just add another entry above:
#   - label: View Notebook
#     url: https://nbviewer.org/github/<user>/<repo>/blob/main/notebooks/x.ipynb
---

Maps vegetation loss from the 2016 Border Fire in San Diego County, California,
by differencing Sentinel-2 NDVI between a 2015 pre-fire scene and a 2016
post-fire scene.

NDVI separates living vegetation from bare and charred ground, so the
difference isolates the burn scar from the surrounding landscape. It renders on
a diverging ramp: deep red where NDVI dropped most, at the core of the scar,
through orange at the margins, and blue across the unburned chaparral.
