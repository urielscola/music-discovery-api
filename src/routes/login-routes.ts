import { Router } from 'express'
import querystring from 'querystring'
import { LoginController } from '../controllers'
import { SpotifyService } from '../services'

const router = Router()
const controller = new LoginController(SpotifyService, querystring)

router.get('/', controller.login)
router.get('/callback', controller.loginCallback)

export default router
