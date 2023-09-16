import dayjs from "dayjs";
import EmptyResponseError from "../Errors/EmptyResponseError";
import { API_ENDPOINT, DATE_SEPERATOR } from "../variables";

export default class DataFetcher {
  #channelId = "";
  #youtubeResponses = [];
  #startDate = null;
  #endDate = null;

  /**
   *
   * @param {string} channelId
   * @param {string} startDate
   * @param {string} endDate
   * @param {string} apiEndpoint
   */
  constructor(channelId, startDate, endDate) {
    this.ChannelId = channelId;
    this.DateRange = startDate.toString() + DATE_SEPERATOR + endDate.toString();
  }

  /**
   * @returns {undefined}
   * @param {string} playlistId - Playlist Id to fetch leveraging the youtube api.
   */
  async initializeFetching(playlistId) {
    try {
      const [startDate, endDate] = this.DateRange.split(DATE_SEPERATOR);

      const initialDate = dayjs(startDate);

      while (true) {
        // getting the last element in each iteration.
        const currentTarget =
          this.YoutubeResponses[this.YoutubeResponses.length - 1];
        let nextPageToken = "";

        if (currentTarget) {
          // get the items array.
          const items = currentTarget.items;

          // get the last date for measuring difference from 50 items.
          const earliestDate = items[items.length - 1].snippet.publishedAt;

          // reassign the count variable.
          if(dayjs(earliestDate).diff(initialDate, 'd') < 0)
            break;

          // next page token required.
          nextPageToken = currentTarget.nextPageToken;
        }

        // reassign the youtube responses
        const playlistId = this.#getPlaylistIdFromChannelId();
        const urlToFetchFrom = this.#getUrlToFetchFrom(playlistId, nextPageToken);
        const apiResponse = await fetch(urlToFetchFrom);
        this.YoutubeResponses = await apiResponse.json(); // pushes new data to the responses list.
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * @param {string} playlistId
   * @returns {string}
   */
  #getUrlToFetchFrom(playlistId, nextPageToken) {
    return this.#constructRequestUrl(API_ENDPOINT, {
      key: process.env.REACT_APP_API_KEY,
      playlistId: playlistId,
      part: "snippet",
      maxResults: 50,
      pageToken: nextPageToken
    });
  }
  /**
   * @returns {string}
   */
  #getPlaylistIdFromChannelId() {
    return this.ChannelId[1] === "C"
      ? this.ChannelId.substring(0, 1) + "U" + this.ChannelId.substring(2)
      : this.ChannelId;
  }

  /**
   *
   * @param {string} baseUrl BaseUrl
   * @param {object} queryParams The query parameters to inject to base url.
   * @returns {string}
   */
  #constructRequestUrl(baseUrl, queryParams = {}) {
    let requestUrl = new URL(baseUrl);
    for (let key in queryParams) {
      requestUrl.searchParams.set(key, queryParams[key]);
    }
    return requestUrl.toString();
  }

  /**
   * @returns {string}
   * @throws {EmptyResponseError}
   */
  get YoutubeResponses() {
    if (!this.#youtubeResponses) {
      throw new EmptyResponseError(
        "YouTube response is empty. Try executing initializeFetching() method to initialize the response body."
      );
    }
    return this.#youtubeResponses;
  }

  /**
   * @returns {undefined}
   * @throws {Error}
   * @param {string} value - The value to initialize the #youtubeResponses with.
   */
  set YoutubeResponses(value) {
    if (!value) {
      throw new EmptyResponseError("Empty value provided.");
    }
    this.#youtubeResponses.push(value);
  }

  /**
   * @returns {string}
   * @throws {Error}
   */
  get ChannelId() {
    if (!this.#channelId) {
      throw new Error("No channel id initialized with.");
    }
    return this.#channelId;
  }

  /**
   * @returns {undefined}
   * @throws {Error}
   * @param {string} value - The value to initialize the channelId with.
   */
  set ChannelId(value) {
    if (!value) {
      throw new Error("Empty value received for ChannelId.");
    }
    this.#channelId = value;
  }

  /**
   * @returns {string}
   * @throws {Error}
   */
  get DateRange() {
    if (!this.#startDate || !this.#endDate) {
      throw new Error(
        "StartDate or EndDate might be having wrong formatted values."
      );
    }
    return this.#startDate + DATE_SEPERATOR + this.#endDate;
  }

  /**
   * @param {string} value - Format: startDate:EndDate.
   * @returns {undefined}
   * @throws {Error}
   */
  set DateRange(value) {
    const [startDate, endDate] = value.split(DATE_SEPERATOR);
    if (!startDate) {
      throw new Error("startDate might be empty or undefined or null");
    }
    if (!endDate) {
      throw new Error("endDate might be empty or undefined or null");
    }
    this.#startDate = startDate;
    this.#endDate = endDate;
  }
}
