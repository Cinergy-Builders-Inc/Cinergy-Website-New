# Cinergy Restoration Website

Live site:
https://cinergy-restoration.vercel.app

## What changed in this revision
- Added a dedicated `areas-served.html` page
- Moved zip-code search off the homepage and onto its own page
- Replaced X with Instagram and kept Facebook + LinkedIn
- Improved header button styling and overall header spacing
- Made all 24/7 buttons use the logo-green color for better contrast
- Updated slide photos to fit the frame better on desktop and stay responsive on mobile
- Added an About dropdown with `About Us`, `Leadership Team`, and `About TPA's`
- Added a TPA section to the About page
- Added an address field to the estimate form
- Kept the 7-person About page card layout with brief intros under each photo

## About page image file names
Use these exact image names in `/images`:
- ceo.jpg
- operations-manager.jpg
- sales-manager.jpg
- brand-ambassador.jpg
- program-director.jpg
- sales-manager-2.jpg
- sales-manager-3.jpg

## Areas served checker
The checker now lives on `areas-served.html`.
It uses the Florida zip list currently loaded into `script.js`.
You can add or remove zips later by editing `const serviceZipData = { ... }`.

## Social links loaded
- Facebook
- Instagram
- LinkedIn


## Latest requested updates
- Footer now includes:
  - 5054 Hiatus Rd, Sunrise FL 33351
  - FL Certification CGC0055114
  - MSR518314 Alabama State Certified Contractor 2500884
- Footer Areas Served list now includes:
  - Broward County
  - Palm Beach County
  - Dade County
  - Sarasota County
- About-page team cards now bounce in on reveal
- Florida zip checker updated with the newest Florida zip list you provided
