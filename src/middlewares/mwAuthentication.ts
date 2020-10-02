import { Request, Response, NextFunction } from 'express'
import { Jsonwebtoken, AuthenticationError } from '../lib'

const mwAuthentication = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization)
    throw new AuthenticationError('No authorization provided.')

  const [bearer, jwt] = authorization.split(/\s/)
  console.log({ bearer, jwt })
  if (!bearer || !jwt) throw new AuthenticationError('Token not provided.')

  try {
    const token = Jsonwebtoken.verify(jwt)
    req.token = token
    return next()
  } catch (err) {
    throw new AuthenticationError('Invalid token.')
  }
}

export default mwAuthentication
