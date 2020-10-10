const httpStatus = require('http-status')

class BadRequestError extends Error {
  status: number
  type: string

  constructor(error?: string) {
    super(error || httpStatus['400_MESSAGE'])
    this.status = httpStatus.BAD_REQUEST
    this.type = this.constructor.name
  }
}

export default BadRequestError
