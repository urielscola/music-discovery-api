import httpStatus from 'http-status'

class AuthenticationError extends Error {
  status: number
  type: string

  constructor(error?: string) {
    super(error || httpStatus['403_MESSAGE'])
    this.status = httpStatus.FORBIDDEN
    this.type = this.constructor.name
  }
}

export default AuthenticationError
