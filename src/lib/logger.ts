import {
  createLogger,
  format,
  transports,
  Logger as IstanceInterface,
} from 'winston'

export interface LoggerInterface {
  info: (message: String) => IstanceInterface
  error: (message: String) => IstanceInterface
  warn: (message: String) => IstanceInterface
}

class Logger implements LoggerInterface {
  private instance: IstanceInterface

  constructor() {
    this.instance = this._makeInstance()
  }

  private _makeInstance(): IstanceInterface {
    return createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
      ),
      defaultMeta: { service: 'music-discovery-api' },
      transports: [
        new transports.Console({
          format: format.combine(format.colorize(), format.simple()),
          silent: process.env.NODE_ENV === 'test',
        }),
      ],
    })
  }

  info(message: String) {
    return this.instance.log('info', message)
  }

  error(message: String) {
    return this.instance.log('error', message)
  }

  warn(message: String) {
    return this.instance.log('warn', message)
  }
}

export default Logger
