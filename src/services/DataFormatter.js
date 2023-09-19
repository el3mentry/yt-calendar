import Data from "./Data";
import dayjs from "dayjs";

export default class DataFormatter {
  #fetchedData = null;
  #formattedData = null;

  constructor(fetchedData) {
    this.FetchedData = fetchedData;
  }

  /**
   * This method is necessary to call to restructurize the data format for the application
   * @returns {undefined}
   */
  standardizeDataFormat() {
    let preStructuredData = this.FetchedData.map(element => {
      let snippets = element.items.map(item => item.snippet);
      return snippets;
    });
    this.FormattedData = preStructuredData[0].map(obj => {
      let publishedDate = dayjs(obj.publishedAt).format("DD-MM-YYYY").toString();
      return {
        [publishedDate]: new Data(obj.thumbnails.maxres, obj.title)
      }
    });
  }

  /**
   * @returns {object}
   * @throws {Error}
   */
  get FormattedData() {
    if(!this.#formattedData) {
      throw new Error(this.#formattedData + " found in formattedData.");
    }
    return this.#formattedData;
  }

  /**
   * @param {object} value
   * @returns {object}
   * @throws {Error}
   */
  set FormattedData(value) {
    if(!value) {
      throw new Error('inappropriate value getting assigned to formattedData');
    }
    this.#formattedData = value;
  }

  /**
   * @returns {object}
   * @throws {Error}
   */
  get FetchedData() {
    if(!this.#fetchedData) {
      throw new Error(this.#fetchedData + " found in fetchedData.");
    }
    return this.#fetchedData;
  }

  /**
   * @param {object} value
   * @returns {object}
   * @throws {Error}
   */
  set FetchedData(value) {
    if(!value) {
      throw new Error('inappropriate value getting assigned to fetchedData');
    }
    this.#fetchedData = value;
  }

  getMonthlyData(month) {
    // loop over the json and provide the data of the provided month.
  }
}
