import { Cookies } from 'react-cookie';

class TokenService {
  cookie = new Cookies();

  setAccessToken(token: string) {
    this.cookie.set('accessToken', token, { path: '/' });
  }
  setRefreshToken(token: string) {
    this.cookie.set('refreshToken', token, { path: '/' });
  }
  setId(id: string) {
    this.cookie.set('id', id, { path: '/' });
  }
  setName(name: string) {
    this.cookie.set('name', name, { path: '/' });
  }
  setEmail(email: string) {
    this.cookie.set('email', email, { path: '/' });
  }
  getAccessToken() {
    return this.cookie.get('accessToken');
  }
  getRefreshToken() {
    return this.cookie.get('refreshToken');
  }
  getId() {
    return this.cookie.get('id');
  }
  getName() {
    return this.cookie.get('name');
  }
  getEmail() {
    return this.cookie.get('email');
  }
  logout() {
    this.cookie.remove('accessToken', { path: '/' });
    this.cookie.remove('refreshToken', { path: '/' });
    this.cookie.remove('email', { path: '/' });
    this.cookie.remove('name', { path: '/' });
    this.cookie.remove('id', { path: '/' });
    console.log('로그아웃 끝!');
  }
  get headers() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }
}
const api = new TokenService();
export default api;
