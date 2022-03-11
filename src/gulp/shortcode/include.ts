// noinspection ES6PreferShortImport
import * as path from "path";
import * as fs from "fs";
import "../../../packages/hexo-seo/packages/js-prototypes/src/String";

/**
 * Process `shortcode include` to included in file, shortcode below:
 * ```html
 * <!-- include file.ext -->
 * ```
 * @param destDir directory to scan markdown
 */
function includeProcess(destDir: fs.PathLike | string) {
  if (!fs.lstatSync(destDir).isDirectory()) {
    console.error(destDir + " isn't folder");
    return;
  }
  const readDir = fs.readdirSync(destDir);
  if (readDir) {
    console.log(readDir.length + " files to process");
    readDir.forEach(function (file) {
      const absolute = path.join(destDir.toString(), file);
      if (fs.statSync(absolute).isDirectory()) return includeProcess(absolute);
      const toProcess = /\.(md|html)$/.test(absolute);
      if (toProcess) {
        const read = fs.readFileSync(absolute).toString();
        const matchFile = read.match(/\<\!\-\-\s+?include\s+?.+?\s+?\-\-\>/gm);
        if (matchFile && matchFile.length > 0) {
          matchFile.forEach(function (readied) {
            const match = readied.match(/\<\!\-\-\s+?include\s+?(.+?)\s+?\-\-\>/);
            //console.log("matched ", match);
            if (match && match.length > 1) {
              const directFile = path.join(destDir.toString(), match[1]);
              const directFind = fs.existsSync(directFile);
              if (directFind) {
                console.log("[direct] Processing shortcode " + directFile);
                const directRead = fs.readFileSync(directFile).toString();
                const directReplace = read.replace(match[0], directRead);
                fs.writeFileSync(absolute, directReplace);
                console.log(absolute.replace(process.cwd(), "") + " include successfully processed");
              } else {
                console.error(match[1] + " not inline with " + absolute);
                const rootFind = path.join(process.cwd(), match[1]);
                if (fs.existsSync(rootFind)) {
                  console.log("[root] Processing shortcode " + directFile);
                  const rootRead = fs.readFileSync(rootFind).toString();
                  const rootReplace = read.replace(match[0], rootRead);
                  fs.writeFileSync(absolute, rootReplace);
                  console.log(absolute.replace(process.cwd(), "") + " include successfully processed");
                }
              }
              console.log("\n");
            }
          });
        }
      }
    });
  }
}

function shortcodeInclude(file: string, read: string) {
  const matchFile = read.match(/\<\!\-\-\s+?include\s+?.+?\s+?\-\-\>/gm);
  if (matchFile && matchFile.length > 0) {
    matchFile.forEach(function (readied) {
      const match = readied.match(/\<\!\-\-\s+?include\s+?(.+?)\s+?\-\-\>/);
      //console.log("matched ", match);
      if (match && match.length > 1) {
        const directFile = path.join(path.dirname(file), match[1]);
        const directFind = fs.existsSync(directFile);
        if (directFind) {
          console.log("[shortcode include][direct] Processing shortcode " + directFile);
          const directRead = fs.readFileSync(directFile).toString();
          read = read.replace(match[0], directRead);
          console.log("[shortcode include] " + file.replace(process.cwd(), "") + " include successfully processed");
        } else {
          console.error("[shortcode include] " + match[1] + " not inline with " + file.replace(process.cwd(), ""));
          const rootFind = path.join(process.cwd(), match[1]);
          if (fs.existsSync(rootFind)) {
            console.log("[shortcode include][root] Processing shortcode " + directFile);
            const rootRead = fs.readFileSync(rootFind).toString();
            read = read.replace(match[0], rootRead);
            console.log("[shortcode include] " + file.replace(process.cwd(), "") + " include successfully processed");
          }
        }
      }
    });
  }
  return read;
}

export default shortcodeInclude;