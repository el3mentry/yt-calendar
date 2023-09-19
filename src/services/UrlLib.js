export default class UrlLib {
  /**
   *
   * @param {string} baseUrl BaseUrl
   * @param {object} queryParams The query parameters to inject to base url.
   * @returns {string}
   */
  static constructRequestUrl(baseUrl, queryParams = {}) {
    let requestUrl = new URL(baseUrl);
    for (let key in queryParams) {
      requestUrl.searchParams.set(key, queryParams[key]);
    }
    return requestUrl.toString();
  }
}
