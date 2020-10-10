import { Request, Response } from 'express'
import { mwAuthentication } from '../../middlewares'
import { mockRequest } from '../utils'

describe('mwAuthentication', () => {
  test('mwAuthentication is defined', () => {
    expect(mwAuthentication).toBeInstanceOf(Function)
  })

  test('mwAuthentication throws if no authentication header is sent', () => {
    const nextFn = jest.fn()
    const req = mockRequest()
    expect(() => {
      mwAuthentication(req as Request, {} as Response, nextFn)
    }).toThrow()
  })

  test('mwAuthentication throws if no token is provided', () => {
    const nextFn = jest.fn()
    const req = mockRequest({ headers: { Authorization: 'Bearer ' } })
    expect(() => {
      mwAuthentication(req as Request, {} as Response, nextFn)
    }).toThrow()
  })

  test('mwAuthentication throws token is invalid', () => {
    const nextFn = jest.fn()
    const req = mockRequest({
      headers: { Authorization: 'Bearer invalid_token' },
    })
    expect(() => {
      mwAuthentication(req as Request, {} as Response, nextFn)
    }).toThrow()
  })
})
