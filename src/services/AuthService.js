import MainService from "./MainService";

export default class AuthService {

  static login(username, password) {
    return MainService.sendPOST('login', {
      username: username,
      password: password
    });
  }

  static register(username, password) {
    return MainService.sendPOST('register', {
      username: username,
      password: password
    });
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token) {
    localStorage.setItem('token', token);
  }

}
