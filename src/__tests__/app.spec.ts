import request from 'supertest'
import app from '../../src/app'

describe('Route testing', () => {
  it('Should return an http 404 and a "message" property (route: GET /)', async () => {
    const res = await request(app).get('/')
    expect(res.status).toEqual(404)
    expect(res.body).toHaveProperty('message')
  })
})
