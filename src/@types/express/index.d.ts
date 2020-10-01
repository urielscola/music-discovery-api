import { LoggerInterface } from '../../lib'

declare global {
  namespace Express {
    interface Request {
      logger: LoggerInterface
    }
  }
}
