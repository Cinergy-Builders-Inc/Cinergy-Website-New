# Cinergy Restoration Website

Live Site: [https://cinergy-restoration.vercel.app](https://cinergy-restoration.vercel.app)

Professional in-house website build for Cinergy Restoration with a custom black-and-green design, layered styling, mobile responsiveness, and built-in lead generation.

---

## Overview

This website was built to replace and improve the existing Cinergy Restoration web presence with:

* Cleaner design
* Better mobile experience
* Stronger calls to action
* More modern visuals
* Easier image replacement
* A direct estimate form that sends without opening the customer's email app

The site is fully responsive and optimized for desktop, tablet, and mobile.

---

## Included Pages

### Home

`index.html`

Includes:

* Full-width hero banner
* Rotating image slider
* Service cards
* Before & After section
* Trust strip
* Emergency call-to-action banners

### About

`about.html`

Includes:

* Company overview
* Team section
* CEO / Director of Sales / Operations Director cards
* Editable headshots and descriptions

### Estimate Request

`estimates.html`

Includes:

* Estimate request form
* Web3Forms integration
* Service dropdown
* Mobile-friendly layout
* Direct submission to email

### Contact

`contact.html`

Includes:

* Phone number
* Email address
* Social links
* Emergency contact section

---

## Features

* Sticky header
* Header social media icons
* Footer social media icons
* Floating “Call Now” button
* Layered dark theme with green highlights
* Green borders and section separation
* Smooth hover effects
* Image slider
* Mobile-friendly responsive layout
* Plug-and-play image system

---

## Certifications Displayed

The top bar on every page includes:

```text
FL Certification CGC0055114 | MSR518314 Alabama State Certified Contractor 2500884
```

---

## Folder Structure

```text
Cinergy Restoration/
│
├── index.html
├── about.html
├── estimates.html
├── contact.html
├── style.css
├── script.js
├── README.md
├── IMAGE-REPLACEMENT-GUIDE.txt
└── images/
```

---

## Images Folder

Inside the `images` folder, use these exact file names:

```text
logo.jpg
hero-main.jpg
slide-1.jpg
slide-2.jpg
slide-3.jpg
before.jpg
after.jpg
about-team.jpg
ceo.jpg
sales-manager.jpg
operations-manager.jpg
contact-photo.jpg
```

If you keep those filenames exactly the same, you can replace photos without editing any code.

Example:

```text
images/hero-main.jpg
```

---

## Team Photos

The website automatically formats team photos tighter using CSS.

Recommended image style:

* Portrait orientation
* Face centered
* JPG format
* Similar crop for all three people

Current placeholders:

* CEO
* Director of Sales
* Operations Director

---

## Slider Photos

The homepage slider has been updated to:

* Show the entire image
* Avoid cropping
* Display wider on desktop
* Feel more “floating” with a darker transparent background

Recommended image size:

```text
1600px wide × 900px tall
```

---

## Before & After Section

The Before & After section has been updated to:

* Stack properly on mobile
* Avoid image cut-off
* Show the full image
* Use a cleaner card layout

---

## Social Media Icons

### Header

* Facebook
* X
* YouTube

### Footer

* Facebook
* YouTube

To add your real links, replace the `#` in the HTML files.

Example:

```html
<a href="https://facebook.com/yourpage">
```

---

## Estimate Form Setup

The estimate form is already connected using Web3Forms.

Installed access key:

```text
43685d5e-cc2c-44f1-b61c-8aacda015450
```

The form sends directly without opening the visitor’s email application.

If you ever need to change the key, open `estimates.html` and update:

```html
<input type="hidden" name="access_key" value="43685d5e-cc2c-44f1-b61c-8aacda015450">
```

---

## Contact Information

Current phone number:

```text
954-397-7707
```

Current email:

```text
dbirge@cbirestorations.com
```

---

## Running Locally

Open the folder in Visual Studio Code.

Recommended extension:

* Live Server

Steps:

1. Open the project folder
2. Right-click `index.html`
3. Select `Open with Live Server`

---

## Deploying to Vercel

This site is already live at:

```text
https://cinergy-restoration.vercel.app
```

To redeploy:

1. Open the project folder in terminal
2. Save your changes
3. Run:

```bash
git add .
git commit -m "Updated Cinergy Restoration website"
git push
```

4. Vercel will automatically update the live site.

---

## Common Issues

### Logo Not Showing

* Wrong filename
* Wrong extension
* Not inside `/images`

Correct:

```text
images/logo.jpg
```

### Images Not Showing

* Image names do not match
* Wrong path
* Used backslashes instead of forward slashes

Correct:

```text
images/slide-1.jpg
```

Wrong:

```text
images\slide-1.jpg
```

### Styling Missing

* `style.css` not uploaded
* Files uploaded inside another folder

### Estimate Form Not Working

* Web3Forms key removed
* Website not connected to internet

---

## Future Improvements

Potential upgrades later:

* Add real project photos
* Add real team headshots
* Connect actual social media links
* Add testimonials section
* Add service-specific pages
* Add FAQ section
* Add project gallery page
* Add Google Reviews integration
* Add animation to the hero section

---

## Notes

This version includes the latest updates:

* Better mobile responsiveness
* Full-width slider image display
* Cleaner before-and-after section
* Header + footer social icons
* More layered black-and-green design
* Better visual depth throughout the site

MADE AND CODED BY: DOMINICK BIRGE