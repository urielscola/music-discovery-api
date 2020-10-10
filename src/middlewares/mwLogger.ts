import { Request, Response, NextFunction } from 'express'
import { Logger } from '../lib'

const mwLogger = (req: Request, res: Response, next: NextFunction) => {
  req.logger = new Logger()
  return next()
}

export default mwLogger
