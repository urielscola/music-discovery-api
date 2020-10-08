import { Request, Response } from 'express'

class ArtistController {
  spotifyService

  constructor(spotifyService: any) {
    this.spotifyService = spotifyService
  }

  async getArtist(req: Request, res: Response) {
    const { id } = req.params
    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.getArtist(accessToken, id)

    return res.status(200).json({ success: true, data })
  }

  async getArtistTopTracks(req: Request, res: Response) {
    const { id } = req.params
    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.getArtistTopTracks(accessToken, id)

    return res.status(200).json({ success: true, data })
  }

  async getRelatedArtists(req: Request, res: Response) {
    const { id } = req.params
    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.getRelatedArtists(accessToken, id)

    return res.status(200).json({ success: true, data })
  }
}

export default ArtistController
