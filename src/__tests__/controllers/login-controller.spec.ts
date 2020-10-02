import { Request, Response } from 'express'
import { LoginController } from '../../controllers'
import { mockResponse, mockRequest } from '../utils'

describe('LoginController', () => {
  test('LoginController is defined', () => {
    const controller = new LoginController({}, {})
    expect(controller).toBeInstanceOf(LoginController)
  })

  test('LoginController loginCallback() method', () => {
    const res = mockResponse()
    const req = mockRequest({ query: { code: 'any_code' } })
    const spotifyServiceMock = {
      getToken: jest.fn().mockResolvedValue({
        access_token: 'any_token',
        refresh_token: 'any_token',
      }),
    }
    const stringifyServiceMock = { stringify: jest.fn() }
    const controller = new LoginController(
      spotifyServiceMock,
      stringifyServiceMock
    )

    controller.loginCallback(req as Request, res as Response)
    expect(spotifyServiceMock.getToken).toHaveBeenCalledTimes(1)
  })

  test('LoginController login() method', () => {
    const res = mockResponse()
    const stringifyServiceMock = { stringify: jest.fn() }
    const controller = new LoginController({}, stringifyServiceMock)

    controller.login({} as Request, res as Response)
    expect(res.redirect).toBeCalledTimes(1)
    expect(stringifyServiceMock.stringify).toHaveBeenCalledTimes(1)
  })
})
