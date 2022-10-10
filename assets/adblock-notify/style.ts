/** Style compiler */

import { writeFileSync } from 'fs';
import { join } from 'path';
import sass from 'sass';

const result = sass.compile(join(__dirname, 'style.scss'));
writeFileSync(join(__dirname, 'style.css'), result.css);
