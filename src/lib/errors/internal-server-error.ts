import httpStatus from 'http-status'

class InternalServerError extends Error {
  status: number
  type: string

  constructor(error?: string) {
    super(error || httpStatus['500_MESSAGE'])
    this.status = httpStatus.INTERNAL_SERVER_ERROR
    this.type = this.constructor.name
  }
}

export default InternalServerError
