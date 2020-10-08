import { Request, Response } from 'express'
import { generateRandomString } from '../utils'

class LoginController {
  spotifyService
  queryStringService
  jsonwebtokenService

  constructor(
    spotifyService: any,
    queryStringService: any,
    jsonwebtokenService: any
  ) {
    this.spotifyService = spotifyService
    this.queryStringService = queryStringService
    this.jsonwebtokenService = jsonwebtokenService
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
    const { code, state, error } = req.query
    const { CLIENT_URL } = process.env
    if (error === 'access_denied' || state === null) {
      return res.redirect(`${CLIENT_URL}/login?error=true`)
    }

    const { access_token, refresh_token } = await this.spotifyService.getToken(
      code as string
    )
    const jwt = this.jsonwebtokenService.sign(access_token, refresh_token)

    return res.redirect(
      `${CLIENT_URL}/login?${this.queryStringService.stringify({
        token: jwt,
      })}`
    )
  }
}

export default LoginController
