# Contact Page — Alexander

Personal contact page for [contact.alexander.xin](https://contact.alexander.xin).

Built with vanilla HTML/CSS/JS. Features Cloudflare Turnstile bot protection to keep the email address safe from scrapers.

## Stack

- Pure HTML5 + CSS (ITCSS architecture, CSS Layers)
- ES Modules (no bundler)
- Cloudflare Turnstile for bot verification
- Deployed via GitHub Pages

## Features

- Aurora animated background (three drifting gradient orbs)
- Rotating gradient avatar ring
- Typewriter subtitle animation
- One-click email copy to clipboard
- Accessibility: ARIA labels, reduced-motion support, focus-visible styles
- Responsive (mobile-first)
- Dark / light mode via `prefers-color-scheme`

## Local Development

Open `index.html` directly in a browser or use any static server:

```bash
npx serve .
# or
python3 -m http.server
```

Turnstile verification is automatically skipped on `localhost` and `file://` — no token needed locally.

## Contact

**Email:** contact-us@alexander.xin

## License

[MIT](./LICENSE) © 2025 Alexander
