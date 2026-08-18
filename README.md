# Cinergy Restoration Website

This is the official website build for Cinergy Restoration.

The site was designed to match our existing branding and includes a cleaner, more modern layout with better mobile responsiveness. The website was built to help homeowners quickly find our services, request an estimate, verify if we service their area, and contact us 24/7.

Included pages:
- Home
- About
- About TPA
- Services
- Areas Served
- Estimates
- Contact

Features included:
- Mobile responsive layout
- Animated service and team sections
- ZIP code service area checker for Florida and Alabama
- Google review section
- Web3Forms estimate form
- Social links in the header and footer
- Custom favicon and branding

To update photos:
Place all images inside the `images` folder and keep the same filenames already used throughout the website.

To deploy:
1. Upload the project to GitHub
2. Connect the repository to Vercel
3. Deploy the site

Website built and maintained by Dominick Birge.


## Service pages added
The Services dropdown now links to dedicated individual pages:
- catastrophic-response.html
- water-damage.html
- fire-damage.html
- mold-remediation.html
- reconstruction.html
- roof-tarp.html
- biohazard-cleanup.html
- board-up.html
- packout-services.html

## Service image filenames
You can replace these images in the `images` folder:
- service-catastrophic-response.jpg
- service-water-damage.jpg
- service-fire-damage.jpg
- service-mold-remediation.jpg
- service-reconstruction.jpg
- service-roof-tarp.jpg
- service-biohazard-cleanup.jpg
- service-board-up.jpg
- service-packout-services.jpg


## Completed work gallery update
- Added a homepage button under Project Photos:
  - Our Jobs Completed Full Photo Gallery
- Added `completed-work.html`
- The completed work page uses one endless looping slideshow
- Estimate page dropdown updated:
  - Construction
  - Remodeling
- Updated service-page image captions with descriptive text


Completed Work gallery image filenames:
- images/job1.jpg
- images/job2.jpg
- images/job3.jpg
- images/job4.jpg
- images/job5.jpg
- images/job6.jpg
- images/job7.jpg
- images/job8.jpg
- images/job9.jpg
- images/job10.jpg
- images/job11.jpg
- images/job12.jpg

## Security hardening added
- Added `vercel.json` with security headers:
  - Content-Security-Policy
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
- Tightened estimate form field limits and autocomplete attributes
- Standardized external links that open in new tabs with `rel="noopener noreferrer"`

Note:
This is front-end hardening for a static site. Full server-side security still depends on your hosting platform, form provider, and any backend services you add later.


## Recommended next security steps
1. Add anti-spam protection to the estimate form
   - Use Web3Forms spam protection options
   - Add rate limiting or captcha if spam starts coming through

2. Add uptime monitoring
   - Use a service like UptimeRobot or Better Stack
   - Get alerts if the website goes down

3. Add analytics and error monitoring
   - Track form issues, broken links, and user drop-off points
   - Useful later if you add more pages or features

4. Protect any future admin pages
   - Do not leave private dashboards or hidden pages public
   - Put admin tools behind authentication

5. Secure future uploads and databases
   - If you later add photo uploads or a database, validate files, sanitize inputs, and restrict permissions

6. Keep dependencies and embeds updated
   - Review Font Awesome, CDN links, and third-party tools occasionally
   - Remove anything you no longer use


## What was added for security
The site was hardened on the front end with these protections:

- **Content Security Policy (CSP)** in `vercel.json`
  - Limits where scripts, styles, fonts, images, and form submissions can load from
  - Helps reduce the risk of injected scripts or unsafe third-party content

- **X-Frame-Options: DENY**
  - Helps prevent clickjacking by blocking the site from being embedded in another page or iframe

- **X-Content-Type-Options: nosniff**
  - Helps stop browsers from guessing the wrong file type for scripts and styles

- **Referrer-Policy**
  - Reduces how much referral information is shared when visitors leave your site

- **Permissions-Policy**
  - Restricts access to sensitive browser features like camera, microphone, and geolocation

- **Estimate form hardening**
  - Added tighter field limits, better autocomplete settings, and safer basic input handling on the front end

- **Safer external links**
  - Links that open in a new tab use `rel="noopener noreferrer"` to reduce tab hijacking risks

### Important note
These changes improve the security of a static front-end website, but they do **not** replace:
- backend security
- database security
- upload security
- login/admin security
- form spam/rate limiting

Those would be the next layer if you add more advanced features later.
