import { AuthenticationError } from '../../../lib/errors'

describe('AuthenticationError', () => {
  test('AuthenticationError is defined', () => {
    const error = new AuthenticationError()
    expect(AuthenticationError).toBeDefined()
    expect(error).toBeInstanceOf(Error)
  })

  test('AuthenticationError uses input message', () => {
    const message = 'This is a test'
    const error = new AuthenticationError(message)
    expect(error.message).toBe(message)
    expect(error.status).toBe(403)
  })

  test('AuthenticationError uses default message when no one is provided', () => {
    const error = new AuthenticationError('')
    expect(error.message).toBeTruthy()
    expect(typeof error.message === 'string').toBe(true)
  })
})
