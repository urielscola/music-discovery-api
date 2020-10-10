import { Router } from 'express'
import { TrackController } from '../controllers'
import { SpotifyService } from '../services'

const router = Router()
const controller = new TrackController(SpotifyService)
router.get('/', controller.getSeveralTracks.bind(controller))
router.get('/recommendations', controller.getRecommendations.bind(controller))
router.get('/:id', controller.getTrack.bind(controller))
router.get('/:id/analysis', controller.getTrackFeatures.bind(controller))

export default router
