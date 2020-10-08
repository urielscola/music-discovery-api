import axios from 'axios'
import querystring from 'querystring'

const SPOTIFY_API_URL = 'https://api.spotify.com/v1'
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/api'

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
      `${SPOTIFY_AUTH_URL}/token`,
      querystring.stringify(body),
      { headers }
    )

    return data
  }

  static async getUser(accessToken: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/me`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getUserTopArtists(accessToken: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/me/top/artists`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getUserTopTracks(accessToken: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/me/top/tracks`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getArtist(accessToken: string, id: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/artists/${id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getSeveralArtists(accessToken: string, ids: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/artists`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        ids,
        market: 'BR',
      },
    })

    return data
  }

  static async getArtistTopTracks(accessToken: string, id: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/artists/${id}/top-tracks`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        country: 'BR',
      },
    })

    return data
  }

  static async getArtistAlbums(accessToken: string, id: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/artists/${id}/albums`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        country: 'BR',
        include_groups: 'album',
      },
    })

    return data
  }

  static async getRelatedArtists(accessToken: string, id: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/artists/${id}/related-artists`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getTrack(accessToken: string, id: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/tracks/${id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getSeveralTracks(accessToken: string, ids: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/tracks`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        ids,
        market: 'BR',
      },
    })

    return data
  }

  static async getTrackFeatures(accessToken: string, id: string) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/audio-features/${id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return data
  }

  static async getRecommendations(
    accessToken: string,
    seedArtists?: string,
    seedGenres?: string,
    seedTracks?: string
  ) {
    const { data } = await axios({
      url: `${SPOTIFY_API_URL}/recommendations`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        seed_artists: seedArtists,
        seed_genres: seedGenres,
        seed_tracks: seedTracks,
        market: 'BR',
      },
    })

    return data
  }
}

export default SpotifyService
