import express from 'express';
import { NextFunction, Request, Response } from 'express-serve-static-core';
import * as fs from 'fs';
import path, { join } from 'path';
import { ParsedQs } from 'qs';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (_req, res) => res.render('pages/index'));
app.get('/:user_id', (req, res, next) => {
  const routeStr = req.params.user_id;
  return SearchView(routeStr, req, res, next);
});
app.all('*', (req, res, next) => {
  const routeStr = req.params[0];
  SearchController(routeStr, req, res, next);
  return SearchView(routeStr, req, res, next);
});

app.use(function (
  err: Error,
  _req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>,
  _next: NextFunction
) {
  // log it
  if (!module.children) console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function (req, res, _next) {
  res.status(404).render('404', { url: req.originalUrl });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

/**
 * Resolve View
 * @param routeStr
 * @param _req
 * @param res
 * @param next
 * @returns
 */
function SearchView(
  routeStr: string,
  _req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>,
  next: NextFunction
) {
  // find views
  const searchView = path.join(__dirname, 'views', routeStr);
  if (fs.existsSync(searchView)) {
    return res.render(join(searchView, 'index.ejs'));
  } else if (fs.existsSync(searchView + '.ejs')) {
    return res.render(searchView + '.ejs');
  }
  return next();
}

function SearchController(
  routeStr: string,
  _req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>,
  next: NextFunction
) {
  let controller: string;
  const searchController = path.join(__dirname, 'views', routeStr);
  if (fs.existsSync(searchController)) {
    if (fs.existsSync(join(searchController, 'index.controller.ts'))) {
      controller = join(searchController, 'index.controller.ts');
    } else if (fs.existsSync(searchController + '.controller.ts')) {
      controller = searchController + '.controller.ts';
    }
  }

  if (controller) {
    app.post(routeStr, require(controller));
  }
}
