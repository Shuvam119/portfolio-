# Shuvam Sarkar — Portfolio

A one-page portfolio site for Technical Writer | Knowledge Base Specialist | Enterprise Documentation.

## Add your assets

1. **Profile photo**  
   Add a photo named `profile.jpg` in this folder (same folder as `index.html`). It appears as a circular image in the hero. Use a square or portrait image; it will be cropped to a circle. Supported formats: JPG, PNG, WebP.

2. **Resume**  
   The "Download Resume" button opens `resume.html`. Visitors use Ctrl+P and choose Save as PDF to download.

## Add your links

Before sharing your portfolio or adding it to your CV/LinkedIn:

1. **LinkedIn**  
   In `index.html`, set the LinkedIn URL in two places:
   - Find `id="linkedin-link"` and set `href="https://linkedin.com/in/YOUR_PROFILE"`.
   - Find `id="linkedin-link-footer"` and set the same `href`.

2. **Portfolio**  
   If you host this site (e.g. GitHub Pages, Netlify), set the portfolio link:
   - Find `id="portfolio-link"` and set `href="https://YOUR_HOSTED_URL"`.

## Run locally

Open `index.html` in a browser, or use a simple local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Hosting

- **GitHub Pages:** Push this folder to a repo, enable Pages, and choose the branch/folder.
- **Netlify:** Drag the folder to [netlify.com/drop](https://app.netlify.com/drop) or connect the repo.
- **Vercel:** Import the repo and deploy.

Use the hosted URL as your portfolio link in your CV and LinkedIn.
