import { Router } from 'express'
import { ArtistController } from '../controllers'
import { SpotifyService } from '../services'

const router = Router()
const controller = new ArtistController(SpotifyService)
router.get('/:id', controller.getArtist.bind(controller))
router.get('/:id/top-tracks', controller.getArtistTopTracks.bind(controller))
router.get('/:id/related', controller.getRelatedArtists.bind(controller))

export default router
