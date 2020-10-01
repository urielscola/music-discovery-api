import { Logger } from '../../lib'

describe('Logger Class', () => {
  test('Logger class is defined', () => {
    const logger = new Logger()
    expect(logger).toBeInstanceOf(Logger)
    expect(logger).toBeDefined()
  })

  test('Logger INFO method', () => {
    const logger = new Logger()
    const spy = jest.spyOn(logger, 'info')
    expect(logger.info).toBeDefined()
    logger.info('Some info message')
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('Some info message')
  })

  test('Logger WARN method', () => {
    const logger = new Logger()
    const spy = jest.spyOn(logger, 'warn')
    expect(logger.warn).toBeDefined()
    logger.warn('Some warn message')
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('Some warn message')
  })

  test('Logger ERROR method', () => {
    const logger = new Logger()
    const spy = jest.spyOn(logger, 'error')
    expect(logger.error).toBeDefined()
    logger.error('Some error message')
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('Some error message')
  })
})
