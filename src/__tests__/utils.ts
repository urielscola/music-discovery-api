export const mockResponse = () => {
  const res: any = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.redirect = jest.fn()
  return res
}

export const mockRequest = (params = {}) => {
  const req: any = {
    query: {},
    params: {},
    headers: {},
    body: {},
    ...params,
  }
  return req
}
