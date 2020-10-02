import { Router } from 'express'
import { UserController } from '../controllers'
import { SpotifyService } from '../services'

const router = Router()
const controller = new UserController(SpotifyService)
router.get('/', controller.getUser.bind(controller))
router.get('/artists', controller.getUserTopArtists.bind(controller))
router.get('/tracks', controller.getUserTopTracks.bind(controller))

export default router
