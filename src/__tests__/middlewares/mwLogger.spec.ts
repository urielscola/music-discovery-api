import { Request, Response } from 'express'
import mwLogger from '../../middlewares/mwLogger'
import { Logger } from '../../lib'

describe('mwLogger', () => {
  test('mwLogger is defined', () => {
    expect(mwLogger).toBeInstanceOf(Function)
  })

  test('mwLogger calls next fn', () => {
    const nextFn = jest.fn()
    mwLogger({} as Request, {} as Response, nextFn)
    expect(nextFn).toBeCalledTimes(1)
  })

  test('mwLogger adds a logger instance to req', () => {
    const nextFn = jest.fn()
    const req = {} as any
    mwLogger(req, {} as Response, nextFn)
    expect(req.logger).toBeDefined()
    expect(req.logger).toBeInstanceOf(Logger)
  })
})
