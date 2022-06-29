import { NextFunction, Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export default function (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<any, Record<string, any>, number>,
  next: NextFunction
) {
  const body = req.body;
  console.log(body);
}
