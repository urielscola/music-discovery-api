import { AuthorizationError } from '../../../lib/errors'

describe('AuthorizationError', () => {
  test('AuthorizationError is defined', () => {
    const error = new AuthorizationError()
    expect(AuthorizationError).toBeDefined()
    expect(error).toBeInstanceOf(Error)
  })

  test('AuthorizationError uses input message', () => {
    const message = 'This is a test'
    const error = new AuthorizationError(message)
    expect(error.message).toBe(message)
    expect(error.status).toBe(401)
  })

  test('AuthorizationError uses default message when no one is provided', () => {
    const error = new AuthorizationError('')
    expect(error.message).toBeTruthy()
    expect(typeof error.message === 'string').toBe(true)
  })
})
