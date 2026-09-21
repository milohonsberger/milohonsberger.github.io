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
---

Maps flood extent across Dadu District, Sindh, following the catastrophic
August 2022 Pakistan floods, using Sentinel-1 radar change detection. The
analysis identified roughly **305,000 hectares** of inundation — about **16%
of the district**.

Radar is the right sensor for this problem. The floods sat under weeks of
monsoon cloud, which would have defeated any optical approach, but Sentinel-1's
C-band SAR sees through cloud entirely. Open water is also smooth enough to
reflect radar away from the sensor rather than back to it, so flooding appears
as a sharp drop in backscatter — a strong, unambiguous signal.

The method compares a pre-monsoon baseline (1 June – 15 July 2022) against
imagery from the peak of the flooding (20 August – 10 September 2022), taking
the ratio of VV/VH between the two periods and thresholding it. A raw threshold
alone produces a noisy, over-inclusive result, so three masks refine it:
permanent water bodies from the JRC Global Surface Water dataset, terrain
steeper than 5° from HydroSHEDS, and isolated pixel clusters below a
connectivity threshold. Each removes a distinct class of false positive —
the Indus and Manchar Lake themselves, hillslope shadow, and residual speckle.

Notable techniques:
- Dual-polarisation RGB composite (VV, VH, VV/VH ratio), which separates open
  water from saturated soil and vegetation more cleanly than single-polarisation
  VH alone
- Refined Lee speckle filtering applied per band before differencing, so the
  change signal reflects surface conditions rather than radar noise
- Ratio-based change detection with masking for permanent water, steep terrain,
  and disconnected pixels
- Zonal area statistics computed against the district boundary, pre-computed
  and reported rather than evaluated at runtime, since the filtering pipeline
  is too expensive to recompute per viewer

The Refined Lee speckle filter is Guido Lemoine's Earth Engine implementation
of the SNAP S1TBX algorithm.
