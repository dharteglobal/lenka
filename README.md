# Lenka Lorien — Standalone Website

**A complete, ready-to-deploy website for Lenka Lorien, somatic therapist & craniosacral practitioner.**

## Contents

- **index.html** — Homepage with full bio, services, booking CTA
- **about.html** — Detailed "about Lenka" page
- **services.html** — All offerings (somatic sessions, craniosacral, workshops, retreats)
- **blog.html** — Articles & insights
- **contact.html** — Contact form & links
- **css/** — Styling (clean, modern, mobile-responsive)
- **js/** — Minimal JavaScript (smooth scrolling, form handling)
- **data/** — JSON files with profile, events, articles
- **images/** — Photography (to be added)

## Quick Start

### 1. Create a new GitHub repository

```bash
git init
git add .
git commit -m "Initial commit: Lenka Lorien website"
git remote add origin https://github.com/YOUR_USERNAME/lenka-website.git
git push -u origin main
```

### 2. Deploy to Netlify (recommended)

- Connect GitHub repo to Netlify (drag-and-drop the folder or use Git integration)
- Set build command: `None` (static site)
- Set publish directory: `.` (root)
- Deploy

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

### 3. Domain (optional)

- Register a domain (e.g., `lenkalorien.cz`, `lenka-therapist.com`)
- Add custom domain to Netlify DNS or point CNAME to `<your-site>.netlify.app`

## Editing Content

### Update Lenka's profile
Edit `data/member-profile.json` and `data/practitioner-profile.json` with current bio, credentials, pricing.

### Add articles
Add new entries to `data/articles.json`:
```json
{
  "slug": "article-title",
  "title": "Article Title",
  "excerpt": "Short summary",
  "author": "Lenka Lorien",
  "date": "2026-06-23",
  "body": "Full markdown or HTML content",
  "image": "/images/article.jpg"
}
```

### Update events
Edit `data/events.json` with upcoming workshops, webinars, retreats.

### Change colours & fonts
Edit `css/style.css` — all CSS variables at the top for easy theming.

### Add photos
Replace placeholder images in `images/` folder. Recommended sizes:
- Hero banner: 1920×1080px
- Lenka portrait: 400×500px
- Blog images: 800×600px or wider

## Features

✅ Fast, lightweight static HTML (no build step needed)
✅ Mobile-responsive design
✅ SEO-friendly (meta tags, structured data, Open Graph)
✅ Accessibility (ARIA labels, semantic HTML)
✅ Contact form ready (connect to Netlify Forms or email service)
✅ Blog post templating
✅ Booking links (direct to Dharte or external calendar)
✅ Dark mode support (media query included in CSS)

## Customization

### Change the colour scheme
In `css/style.css`, update the CSS custom properties:
```css
--primary-color: #123C32;   /* Dharte green — change to your preference */
--secondary-color: #f0f7f4;
--text-color: #1a1a1a;
```

### Add booking integration
In `contact.html` and service pages, update booking URLs:
- Current: points to Dharte booking link (`book.com/lenka.kolarova`)
- Replace with Calendly, Acuity, Stripe, or your preferred booking system

### Add contact form backend
Edit `contact.html` form `action` attribute:
- **Netlify Forms** (easiest): keep `method="POST"` and add `netlify` attribute
- **Formspree**: replace action with `https://formspree.io/f/YOUR_ID`
- **Custom backend**: implement your own email service

## Files & Structure

```
.
├── index.html                # Homepage
├── about.html               # About Lenka
├── services.html            # Services & offerings
├── blog.html                # Articles listing
├── contact.html             # Contact & booking
├── css/
│   └── style.css            # All styling + variables
├── js/
│   └── main.js              # Navigation, form, smooth scroll
├── data/
│   ├── member-profile.json  # Lenka's Dharte profile data
│   ├── practitioner-profile.json
│   ├── events.json          # Events & workshops
│   ├── articles.json        # Articles authored by Lenka
│   └── bookings.json        # (optional) pricing & packages
├── images/                  # Photos (hero, portrait, blog)
├── fonts/                   # (optional) custom web fonts
├── README.md               # This file
└── .gitignore             # Standard (node_modules, .env, etc.)
```

## SEO & Analytics

- **Meta tags**: Update in each HTML `<head>` (title, description, OG image)
- **Google Analytics**: Add your Google tag ID in `js/main.js`
- **Sitemap**: Auto-generated on Netlify or add `sitemap.xml`
- **Robots.txt**: Included (allows all crawlers)
- **Structured data**: JSON-LD schema included for therapist/person/service

## Performance Tips

- Optimize images: use WebP format where supported, compress JPEGs with [TinyJPG](https://tinyjpg.com/)
- Minify CSS/JS: use tools like [CSS Minifier](https://cssminifier.com/) & [JS Minifier](https://javascript-minifier.com/)
- Lazy-load images: uncomment `loading="lazy"` in `<img>` tags
- Cache-bust: add `?v=1` to CSS/JS links if making updates

## Support & Updates

- **Questions?** Email: megha@dharte.net
- **Want to integrate with Dharte?** Use the API at [dharte.com](https://dharte.com)
- **Booking link**: Always points to [book.com/lenka.kolarova](https://book.com/lenka.kolarova)

---

**Built with ❤️ by Dharte Wellness** — [dharte.com](https://dharte.com)

Last updated: 23 June 2026
