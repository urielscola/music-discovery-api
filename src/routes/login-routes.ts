import { Router } from 'express'
import querystring from 'querystring'
import { LoginController } from '../controllers'
import { SpotifyService } from '../services'
import { Jsonwebtoken } from '../lib'

const router = Router()
const controller = new LoginController(
  SpotifyService,
  querystring,
  Jsonwebtoken
)
router.get('/', controller.login.bind(controller))
router.get('/callback', controller.loginCallback.bind(controller))

export default router
