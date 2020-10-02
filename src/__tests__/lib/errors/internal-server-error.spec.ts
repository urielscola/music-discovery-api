import { InternalServerError } from '../../../lib/errors'

describe('InternalServerError', () => {
  test('InternalServerError is defined', () => {
    const error = new InternalServerError()
    expect(InternalServerError).toBeDefined()
    expect(error).toBeInstanceOf(Error)
  })

  test('InternalServerError uses input message', () => {
    const message = 'This is a test'
    const error = new InternalServerError(message)
    expect(error.message).toBe(message)
    expect(error.status).toBe(500)
  })

  test('InternalServerError uses default message when no one is provided', () => {
    const error = new InternalServerError('')
    expect(error.message).toBeTruthy()
    expect(typeof error.message === 'string').toBe(true)
  })
})
