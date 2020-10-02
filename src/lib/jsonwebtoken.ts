import jsonwebtoken from 'jsonwebtoken'

class Jsonwebtoken {
  static sign(accessToken: string, refreshToken: string) {
    return jsonwebtoken.sign(
      {
        accessToken,
        refreshToken,
        iat: Math.floor(Date.now()),
      },
      'shhh',
      { expiresIn: '1h' }
    )
  }

  static verify(token: string) {
    return jsonwebtoken.verify(token, 'shhh')
  }
}

export default Jsonwebtoken
