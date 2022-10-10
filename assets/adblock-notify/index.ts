/** index.html builder */

import { parsePost } from 'hexo-post-parser';
import { join } from 'path';
import { getConfig } from 'static-blog-generator';

parsePost(join(__dirname, 'readme.md'), {
  cache: false,
  sourceFile: join(__dirname, 'readme.md'),
  config: <any>getConfig(),
  formatDate: true,
  fix: true,
  shortcodes: {
    youtube: true,
    text: true,
    script: true,
    now: true,
    link: true,
    include: true,
    css: true,
    codeblock: true
  }
}).then((result) => {
  console.log(result.body);
});
