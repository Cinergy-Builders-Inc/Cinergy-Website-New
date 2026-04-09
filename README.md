# Cinergy Restoration Website

Live site:
https://cinergy-restoration.vercel.app

## What was added in this version
- New `services.html` page
- Services dropdown in the header on every page
- Homepage service bubbles/cards now click to matching service sections
- About page rebuilt with 7 individual team cards
- Team cards use drop-in scroll animation
- Added layered black-and-green visual depth
- Added animated Florida zip checker section
- Mobile fixes for before/after and slider sections
- Slider now shows the full image instead of cropping
- Footer keeps Facebook + YouTube, header keeps Facebook + X + YouTube

## New image files used
Place these in `/images`:
- brand-ambassador.jpg
- program-director.jpg
- sales-manager-2.jpg
- sales-manager-3.jpg
- services-banner.jpg

If you do not replace them yet, fallback images were added for now.

## Service zip code map
The Florida map uses starter zip-code data in `script.js`.
Search for:
`const serviceZipData = {`
and replace/add your real zip codes and positions.

Format:
"33301": {x: 56, y: 76, city: "Fort Lauderdale"}

- `x` is horizontal percent on the map
- `y` is vertical percent on the map

## Estimate form
Web3Forms is already connected with your current key.

## Deploy
Upload the contents of the folder or push to GitHub and redeploy on Vercel.


## About page photo file names

Keep these exact file names in the `images` folder for the 7 About-page cards:

- `ceo.jpg`
- `operations-manager.jpg`
- `sales-manager.jpg`
- `brand-ambassador.jpg`
- `program-director.jpg`
- `sales-manager-2.jpg`
- `sales-manager-3.jpg`

The original three image tags were kept the same:
- `ceo.jpg`
- `operations-manager.jpg`
- `sales-manager.jpg`

## Latest update in this zip

- Added cleaner animated 24/7 call-to-action buttons
- Upgraded the contact page call button
- Kept the site fully mobile responsive
- Preserved the Florida-only zip-code map data
