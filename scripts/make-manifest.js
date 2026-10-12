// Lists every image in /images so the page can find photos by product id
// (9.png = main photo of product 9, 9-2.png, 9-3.png = extra photos).
const fs = require("fs");
const dir = "images";
const files = fs.existsSync(dir)
  ? fs.readdirSync(dir).filter(f => /\.(webp|jpe?g|png|avif|gif)$/i.test(f)).sort()
  : [];
fs.writeFileSync(dir + "/manifest.json", JSON.stringify(files, null, 2));
console.log("images/manifest.json:", files.length, "files");
