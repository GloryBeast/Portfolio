# Omkar Unde — Portfolio

A responsive, single-page portfolio for Omkar Unde. It is built with plain HTML, CSS, and JavaScript, so there is no build step and no paid service dependency.

## Run it on your computer

1. Extract `omkar-unde-portfolio.zip`.
2. Open the extracted folder.
3. Double-click `index.html` to preview it in a browser.

For a local web server, open a terminal in the folder and run `npx serve .` (requires Node.js), then open the local URL it prints.

## Publish free with GitHub Pages

1. Create or sign in to a GitHub account at https://github.com.
2. Create a **public** repository named `omkar-unde-portfolio`.
3. Extract the ZIP and upload the files and `assets` folder from inside `omkar-portfolio` to the repository root. Keep `index.html` at the root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. Wait for the Pages deployment to finish. The public site will appear at `https://YOUR-USERNAME.github.io/omkar-unde-portfolio/`.

GitHub Pages suits this static site and offers a free `github.io` URL. Netlify is another beginner-friendly option: sign in, choose **Add new site → Deploy manually**, and drag the extracted project folder into the deploy area. Its free plan and limits can change, so check the current plan page before publishing.

## Personalize before publishing

- Review the displayed phone/email and social profile links in `index.html`.
- The resume is in `assets/Omkar-Unde-Resume.pdf`; replace it whenever your resume changes.
- Project links currently point to your GitHub profile because the resume did not include individual repository URLs. Update each project link to its specific repository or live demo when available.
- Update the project descriptions and skills in `index.html` as your work evolves.

## Files

- `index.html` — page content and project descriptions
- `style.css` — responsive styling and visual effects
- `script.js` — mobile navigation, current year, and subtle pointer parallax
- `assets/Omkar-Unde-Resume.pdf` — downloadable resume

The page uses Google Fonts when a visitor is online and falls back to system fonts otherwise. All illustrations are drawn in CSS/SVG; there are no stock-image or icon license dependencies.
