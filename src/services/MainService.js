const baseUrl = 'http://localhost:8081/';

export default class MainService {

  /**
   * GET Request
   * @param url
   * @param data
   * @returns {Promise<Response | void>}
   */
  static sendGET(url, data) {
    return fetch(baseUrl + url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .catch(err => MainService.handleErrors(err));
  }

  /**
   * POST Request
   * @param url
   * @param data
   * @returns {Promise<Response | void>}
   */
  static sendPOST(url, data) {
    return fetch(baseUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .catch(err => MainService.handleErrors(err));
  }


  static handleErrors(error) {
    console.err('FETCH_ERROR', error);
  }

}
