import { generateRandomString } from '../../utils'

describe('Utils', () => {
  test('generateRandomString method', () => {
    const randomString = generateRandomString(10)

    expect(generateRandomString).toBeDefined()
    expect(generateRandomString).toBeInstanceOf(Function)
    expect(typeof randomString).toBe('string')
    expect(randomString.length).toBe(10)
  })
})
