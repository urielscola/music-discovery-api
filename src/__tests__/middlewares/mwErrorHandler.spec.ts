import { Request } from 'express'
import httpStatus from 'http-status'
import mwErrorHandler from '../../middlewares/mwErrorHandler'
import { BadRequestError } from '../../lib/errors'

const mockResponse = () => {
  const res: any = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('mwErrorHandler', () => {
  test('mwErrorHandler is defined', () => {
    expect(mwErrorHandler).toBeInstanceOf(Function)
  })

  test('mwErrorHandler responds with provided error', () => {
    const nextFn = jest.fn()
    const res = mockResponse()
    const error = new BadRequestError('test error')

    mwErrorHandler(error as any, {} as Request, res as any, nextFn)
    expect(res.status).toBeCalledTimes(1)
    expect(res.status).toBeCalledWith(400)
    expect(res.json).toBeCalledTimes(1)
    expect(res.json).toBeCalledWith({
      success: false,
      status: 400,
      message: 'test error',
    })
  })

  test('mwErrorHandler handles unknown errors', () => {
    const nextFn = jest.fn()
    const res = mockResponse()
    const error = new Error()

    mwErrorHandler(error as any, {} as Request, res as any, nextFn)
    expect(res.status).toBeCalledWith(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.json).toBeCalledWith({
      success: false,
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: httpStatus['500_MESSAGE'],
    })
  })
})
