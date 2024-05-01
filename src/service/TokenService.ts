import { Cookies } from 'react-cookie';

class TokenService {
  cookie = new Cookies();

  setAccessToken(token: string, expireTime: number) {
    this.cookie.set('accessToken', token, { path: '/', expires: new Date(expireTime) });
  }
  setRefreshToken(token: string, expireTime: number) {
    this.cookie.set('refreshToken', token, { path: '/', expires: new Date(expireTime) });
  }

  getAccessToken() {
    return this.cookie.get('accessToken');
  }
  getRefreshToken() {
    return this.cookie.get('refreshToken');
  }

  logout() {
    this.cookie.remove('accessToken', { path: '/' });
    this.cookie.remove('refreshToken', { path: '/' });
  }
  get headers() {
    if (this.getAccessToken())
      return {
        Authorization: `Bearer ${this.getAccessToken()}`,
      };
    return {};
  }
}

export const api = new TokenService();
