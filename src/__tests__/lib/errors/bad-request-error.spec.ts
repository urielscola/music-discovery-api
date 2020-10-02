import { BadRequestError } from '../../../lib/errors'

describe('BadRequestError', () => {
  test('BadRequestError is defined', () => {
    const error = new BadRequestError()
    expect(BadRequestError).toBeDefined()
    expect(error).toBeInstanceOf(Error)
  })

  test('BadRequestError uses input message', () => {
    const message = 'This is a test'
    const error = new BadRequestError(message)
    expect(error.message).toBe(message)
    expect(error.status).toBe(400)
  })

  test('BadRequestError uses default message when no one is provided', () => {
    const error = new BadRequestError('')
    expect(error.message).toBeTruthy()
    expect(typeof error.message === 'string').toBe(true)
  })
})
