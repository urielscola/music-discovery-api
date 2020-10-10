import { Request, Response } from 'express'

class PlaylistController {
  spotifyService

  constructor(spotifyService: any) {
    this.spotifyService = spotifyService
  }

  async createPlaylist(req: Request, res: Response) {
    const {
      token: { accessToken },
    } = req
    const { name } = req.body;

    const { id } = await this.spotifyService.getUser(accessToken);
    const data = await this.spotifyService.createPlaylist(accessToken, id, name)

    return res.status(201).json({ success: true, data })
  }

  async addToPlaylist(req: Request, res: Response) {
    const { id } = req.params
    const { tracks } = req.body

    const {
      token: { accessToken },
    } = req
    const data = await this.spotifyService.addToPlaylist(accessToken, id, tracks)
    return res.status(201).json({ success: true, data })
  }
}

export default PlaylistController
