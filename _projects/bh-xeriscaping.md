---
title: Xeriscaping's Effect on Water Consumption in Beverly Hills
type: staticmap
featured: false
summary: Remote sensing analysis measuring the irrigation water saved by Beverly Hills' transition from traditional grass landscaping to xeriscaping between 2009 and 2020.
tags: [ArcGIS Pro, NAIP, Remote Sensing, Classification]
thumbnail: /assets/images/bh-xeriscaping-thumb.jpg
images:
  - /assets/images/bh-ndvi-2009.jpg
  - /assets/images/bh-ndvi-2020.jpg
links: []
---

Starting in 2009, Beverly Hills began to transition from traditional grass
landscaping to xeriscaping, a form of landscaping that uses plants which
require very little irrigation. This project measures the effectiveness of that
transition by using remote sensing techniques to calculate the amount of water
saved in acre-feet between 2009 and 2020.

An object based classification was conducted on NAIP imagery from both years,
using four classes: Trees, Grass, Urban, and Roads. A color infrared band
combination was chosen over NDVI because it made it easier to distinguish
between grass and trees. The results were differenced to determine the change
in grass area, and the Maximum Applied Water Allowance (MAWA) equation was used
to calculate the water needed to sustain it.

This project found that in 2009 Beverly Hills contained 671.676 acres of grass
landscape and 445.77 acres in 2020. In 2009 it took 1,349.57 acre-feet/year of
water to maintain the landscaping, while in 2020 it took only 896.73
acre-feet/year — a decrease in annual water use of 452.84 acre-feet per year.
