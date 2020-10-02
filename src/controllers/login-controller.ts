import { Request, Response } from 'express'
import { generateRandomString } from '../utils'

class LoginController {
  spotifyService
  queryStringService

  constructor(spotifyService: any, queryStringService: any) {
    this.spotifyService = spotifyService
    this.queryStringService = queryStringService
  }

  login(req: Request, res: Response) {
    const state = generateRandomString(16)

    const query = this.queryStringService.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: process.env.SPOTIFY_APP_SCOPE,
      redirect_uri: process.env.SPOTIFY_OAUTH_CALLBACK_URL,
      show_dialog: true,
      state,
    })

    return res.redirect(`https://accounts.spotify.com/authorize?${query}`)
  }

  async loginCallback(req: Request, res: Response) {
    const { code } = req.query
    const { access_token, refresh_token } = await this.spotifyService.getToken(
      code as string
    )
    const jwt = { access_token, refresh_token }
    return res.redirect(
      `${process.env.CLIENT_URL}#${this.queryStringService.stringify(jwt)}`
    )
  }
}

export default LoginController
