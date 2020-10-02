import axios from 'axios'
import querystring from 'querystring'

class SpotifyService {
  static async getToken(code: string) {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

    const body = {
      code,
      redirect_uri: process.env.SPOTIFY_OAUTH_CALLBACK_URL,
      grant_type: 'authorization_code',
    }

    const headers = {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization:
        'Basic ' +
        Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
          'base64'
        ),
    }

    const { data } = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify(body),
      { headers }
    )

    return data
  }

  static async getUser(accessToken: string) {
    const { data } = await axios({
      url: 'https://api.spotify.com/v1/me',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }
}

export default SpotifyService
