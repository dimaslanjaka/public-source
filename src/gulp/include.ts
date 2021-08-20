// noinspection ES6PreferShortImport
import * as path from "path";
import * as fs from "fs";

/**
 * Process `shortcode include` to included in file, shortcode below:
 * ```html
 * <!-- include file.ext -->
 * ```
 * @param destDir directory to scan markdown
 */
function includeProcess(destDir: fs.PathLike | string) {
  if (!fs.lstatSync(destDir).isDirectory()) {
    console.error(destDir + " isnt folder");
    return;
  }
  let readDir = fs.readdirSync(destDir);
  if (readDir) {
    console.log(readDir.length + " files to process");
    readDir.forEach(function (file) {
      let absolute = path.join(destDir.toString(), file);
      if (fs.statSync(absolute).isDirectory()) return includeProcess(absolute);
      var toProcess = /\.(md|html)$/.test(absolute);
      if (toProcess) {
        let read = fs.readFileSync(absolute).toString();
        let matchFile = read.match(/\<\!\-\-\s+?include\s+?.+?\s+?\-\-\>/gm);
        if (matchFile && matchFile.length > 0) {
          matchFile.forEach(function (readed) {
            let match = readed.match(/\<\!\-\-\s+?include\s+?(.+?)\s+?\-\-\>/);
            console.log("matched ", match);
            if (match && match.length > 1) {
              let directFile = path.join(destDir.toString(), match[1]);
              let directFind = fs.existsSync(directFile);
              if (directFind) {
                console.log("[direct] Processing shortcode " + directFile);
                let directRead = fs.readFileSync(directFile).toString();
                let directReplace = read.replace(match[0], directRead);
                fs.writeFileSync(absolute, directReplace);
                console.log(path.basename(absolute) + " include successfully processed");
              } else {
                console.error(match[1] + " not inline with " + absolute);
                let rootFind = path.join(process.cwd(), match[1]);
                if (fs.existsSync(rootFind)) {
                  console.log("[root] Processing shortcode " + directFile);
                  let rootRead = fs.readFileSync(rootFind).toString();
                  let rootReplace = read.replace(match[0], rootRead);
                  fs.writeFileSync(absolute, rootReplace);
                  console.log(path.basename(absolute) + " include successfully processed");
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

export default includeProcess;
