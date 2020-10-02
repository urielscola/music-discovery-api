import httpStatus from 'http-status'
import { Request, Response, NextFunction, Errback } from 'express'

interface ErrorInterface extends Errback {
  status?: number
  message?: string
}

const errorHandlerMW = (
  err: ErrorInterface,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || httpStatus.INTERNAL_SERVER_ERROR
  const message = err.message || httpStatus['500_MESSAGE']

  if (req.logger)
    req.logger.error(`Sending response code ${status}: ${message}`)

  res.status(status).json({ success: false, status, message })
}

export default errorHandlerMW
