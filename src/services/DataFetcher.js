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

  /**
   * @returns None
   * @param playlistId string - Playlist Id to fetch leveraging the youtube api.
   */
  async initializeFetching(playlistId) {
    try {
      const [startDate, endDate] = this.DateRange.split(":");
      const channelId = this.ChannelId;
      const apiEndpoint = this.ApiEndpoint;
      const apiResponse = await fetch(apiEndpoint);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @returns string
   * @throws EmptyResponseError
   */
  get YoutubeResponse() {
    if (this.#youtubeResponse === "") {
      throw new EmptyResponseError(
        "YouTube response is empty. Try executing initializeFetching() method to initialize the response body.",
      );
    }
    return this.#youtubeResponse;
  }

  /**
   * @returns None
   * @throws Error
   * @param value string - The value to initialize the #youtubeResponse with.
   */
  set YoutubeResponse(value) {
    if (value === "") {
      throw new EmptyResponseError("Empty value provided.");
    }
    this.#youtubeResponse = value;
  }

  /**
   * @returns string
   * @throws Error
   */
  get ChannelId() {
    if (this.#channelId === "") {
      throw new Error("No channel id initialized with.");
    }
    return this.#channelId;
  }

  /**
   * @returns None
   * @throws Error
   * @param value string - The value to initialize the channelId with.
   */
  set ChannelId(value) {
    if (value === "") {
      throw new Error("Empty value received for ChannelId.");
    }
    this.#channelId = value;
  }

  /**
   * @returns string
   * @throws Error
   */
  get ApiEndpoint() {
    if (this.#apiEndpoint === "") {
      throw new Error("Empty api Endpoint. Nothing has been initialized with.");
    }
    return this.#apiEndpoint;
  }

  /**
   * @returns None
   * @throws Error
   * @param value string - The value to initialize the api endpoint with.
   */

  set ApiEndpoint(value) {
    if (value === "") {
      throw new Error("Empty api endpoint trying to get initialized.");
    }
    this.#apiEndpoint = value;
  }

  /**
   * @returns string
   * @throws Error
   */
  get DateRange() {
    if (this.#startDate === "" || this.#endDate === "") {
      throw new Error("StartDate or EndDate might be empty.");
    }
    return this.#startDate + ":" + this.#endDate;
  }

  /**
   * @param value string - Format: startDate:EndDate.
   * @returns None
   * @throw Error
   */
  set DateRange(value) {
    const [startDate, endDate] = value.split(":");
    if (startDate && endDate) {
      this.#startDate = startDate;
      this.#endDate = endDate;
    }
    throw new Error("One of the value might be empty or undefined.");
  }
}
