import UrlLib from "./UrlLib";
import { API_ENDPOINT } from "../variables";

export default class ChannelInfoProvider {
  #channelId = "";
  #channelInfo;

  constructor(channelId) {
    this.#channelId = channelId;
  }

  /**
   * @description Function to fetch channel related information.
   * @returns {Promise<undefined>}
   */
  async fetchChannelInfo() {
    const url = UrlLib.constructRequestUrl(API_ENDPOINT + "/channels", {
      key: process.env.REACT_APP_API_KEY,
      id: this.ChannelId,
      part: "snippet",
    });

    const response = await (await fetch(url)).json();
    this.#channelInfo = response;
  }

  /**
   * @description Returns the specified channel's name.
   * @returns {Promise<string>}
   */
  getChannelTitle() {
    return this.#channelInfo.items[0].snippet.title;
  }

  /**
   * @description Returns the specified channel's username.
   * @returns {Promise<string>}
   */
  getChannelUsername() {
    return this.#channelInfo.items[0].snippet.customUrl;
  }

  /**
   * @description Returns the specified channel's profile picture.(uses 'default' as default).
   * @returns {Promise<string>}
   */
  getChannelThumbnail() {
    return this.#channelInfo.items[0].snippet.thumbnails.default.url;
  }

  /**
   * @returns {string}
   * @throws {Error}
   */
  get ChannelId() {
    if (!this.#channelId) {
      throw new Error(this.#channelId + " got assigned to #channelID");
    }
    return this.#channelId;
  }

  /**
   * @param {string} value The value to assign as channelID
   * @throws {Error}
   * @returns {undefined}
   */
  set ChannelId(value) {
    if (!value) {
      throw new Error(value + " can not be assigned to channel id");
    }
    this.#channelId = value;
  }
}
