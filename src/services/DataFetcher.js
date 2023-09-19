import dayjs from "dayjs";
import EmptyResponseError from "../Errors/EmptyResponseError";
import { API_ENDPOINT, DATE_SEPERATOR } from "../variables";
import UrlLib from "./UrlLib";

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
   * @returns {int}
   * @param {string} playlistId - Playlist Id to fetch leveraging the youtube api.
   */
  async initializeFetching() {
    try {
      const startDate = this.DateRange.split(DATE_SEPERATOR)[0];

      const initialDate = dayjs(startDate);
      let lastYTResponse = {
        nextPageToken: undefined,
      };

      while (true) {
        // fetch the details from YT.
        const playlistId = this.#getPlaylistIdFromChannelId();
        const urlToFetchFrom = this.#getUrlToFetchFrom(
          playlistId,
          lastYTResponse.nextPageToken ? lastYTResponse.nextPageToken : ""
        );
        const apiResponse = await fetch(urlToFetchFrom);
        this.YoutubeResponses = await apiResponse.json(); // pushes new data to the responses list.

        // getting the last element in each iteration.
        lastYTResponse =
          this.YoutubeResponses[this.YoutubeResponses.length - 1];

        // section will skip for the first time.
        const items = lastYTResponse.items; // items: [videos]

        // earliest date amongst 50 items in the array. (found at the end of the array.)
        const earliestDate = items[items.length - 1].snippet.publishedAt;

        // if the earliest element is earlier than the chosen start date.
        if (dayjs(earliestDate).diff(initialDate, "d") < 0) break;

        // 'next page token' will be absent for the last page.
        if (!lastYTResponse.nextPageToken) break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      return 0;
    }
  }
  /**
   * @param {string} playlistId
   * @returns {string}
   */
  #getUrlToFetchFrom(playlistId, nextPageToken) {
    return UrlLib.constructRequestUrl(API_ENDPOINT + "/playlistItems", {
      key: process.env.REACT_APP_API_KEY,
      playlistId: playlistId,
      part: "snippet",
      maxResults: 50,
      pageToken: nextPageToken,
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
