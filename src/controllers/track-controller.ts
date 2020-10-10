import { Request, Response } from 'express'

class TrackController {
  spotifyService

  constructor(spotifyService: any) {
    this.spotifyService = spotifyService
  }

  async getTrack(req: Request, res: Response) {
    const { id } = req.params
    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.getTrack(accessToken, id)

    return res.status(200).json({ success: true, data })
  }

  async getSeveralTracks(req: Request, res: Response) {
    const { ids } = req.query
    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.getSeveralTracks(accessToken, ids)
    return res.status(200).json({ success: true, data })
  }

  async getTrackFeatures(req: Request, res: Response) {
    const { id } = req.params
    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.getTrackFeatures(accessToken, id)

    return res.status(200).json({ success: true, data })
  }

  async getRecommendations(req: Request, res: Response) {
    const {
      token: { accessToken },
    } = req
    const { seed_artists, seed_tracks, seed_genres } = req.query

    const data = await this.spotifyService.getRecommendations(
      accessToken,
      seed_artists,
      seed_genres,
      seed_tracks
    )

    return res.status(200).json({ success: true, data })
  }
}

export default TrackController
