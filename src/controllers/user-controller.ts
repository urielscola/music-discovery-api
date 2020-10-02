import { Request, Response } from 'express'

class LoginController {
  spotifyService

  constructor(spotifyService: any) {
    this.spotifyService = spotifyService
  }

  async getUser(req: Request, res: Response) {
    const {
      token: { accessToken },
    } = req
    const user = await this.spotifyService.getUser(accessToken)

    return res.status(200).json({ success: true, user })
  }

  async getUserTopTracks(req: Request, res: Response) {
    const {
      token: { accessToken },
    } = req
    const tracks = await this.spotifyService.getUserTopTracks(accessToken)

    return res.status(200).json({ success: true, tracks })
  }

  async getUserTopArtists(req: Request, res: Response) {
    const {
      token: { accessToken },
    } = req
    const artists = await this.spotifyService.getUserTopArtists(accessToken)
    return res.status(200).json({ success: true, artists })
  }
}

export default LoginController
