import httpStatus from 'http-status'

class AuthorizationError extends Error {
  status: number
  type: string

  constructor(error?: string) {
    super(error || httpStatus['401_MESSAGE'])
    this.status = httpStatus.UNAUTHORIZED
    this.type = this.constructor.name
  }
}

export default AuthorizationError
