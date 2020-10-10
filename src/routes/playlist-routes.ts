import { Router } from 'express'
import { PlaylistController } from '../controllers'
import { SpotifyService } from '../services'

const router = Router()
const controller = new PlaylistController(SpotifyService)
router.post('/', controller.createPlaylist.bind(controller))
router.post('/:id/tracks', controller.addToPlaylist.bind(controller))

export default router
