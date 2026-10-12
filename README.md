# Reny site

- index.html   the page (do not edit data here)
- images/      product photos (file names go in the sheet, column `images`)
- data/        local copy of the sheet as CSV (used until you connect Google Sheets)
- reny-products.xlsx   the sheet template (import into Google Sheets; README tab explains every column)

Preview locally:  python3 -m http.server   then open http://localhost:8000
Deploy: drag this whole folder to Netlify (HTTPS, so GPS works).

Connect Google Sheets: import the xlsx, File > Share > Publish to web (entire document),
paste the publish id into SHEET.id in index.html, and set each tab's gid in SHEET.gids.
