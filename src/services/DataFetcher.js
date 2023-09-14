import EmptyResponseError from "../Errors/EmptyResponseError";

export default class DataFetcher {
  #channelId = "";
  #youtubeResponse = {};
  #startDate = null;
  #endDate = null;
  #apiEndpoint = null;

  constructor(channelId, startDate, endDate, apiEndpoint) {
    this.#channelId = channelId;
    this.#startDate = startDate;
    this.#endDate = endDate;
    this.#apiEndpoint = apiEndpoint;
  }

  initializeFetching() {
    // fetching algo goes here.
  }

  /**
   *  @returns json
   *  @throws EmptyResponseError
   */
  getFetchedResponse() {
    if (this.#youtubeResponse === "") {
      throw new EmptyResponseError(
        "YouTube response is empty. Try executing initializeFetching() method to initialize the response body."
      );
    }
    return this.#youtubeResponse;
  }

  /**
   * @returns string
   * @throws Error
   */
  getChannelId() {
    if (this.#channelId === "") {
      throw new Error("No channel id initialized with.");
    }
    return this.#channelId;
  }

  /**
   * @returns string
   * @throws Error
   */
  getApiEndpoint() {
    if (this.#apiEndpoint === "") {
      throw new Error("Empty api Endpoint. Nothing has been initialized with.");
    }
    return this.#apiEndpoint;
  }

  /**
   * @returns string
   * @throws Error
   */
  getDateRange() {
    if (this.#startDate === "" || this.#endDate === "") {
      throw new Error("StartDate or EndDate might be empty.");
    }
    return this.#startDate + ":" + this.#endDate;
  }
}
