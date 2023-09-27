import Data from "./Data";
import dayjs from "dayjs";

export default class DataFormatter {
  #fetchedData = null;
  #formattedData = null;

  constructor(fetchedData) {
    this.FetchedData = fetchedData;
  }

  // {date: [{obj}], date: [{obj}]}

  /**
   * This method is necessary to call to restructurize the data format for the application
   * @returns {undefined}
   */
  standardizeDataFormat() {
    let preStructuredData = this.FetchedData.map((element) => {
      let snippets = element.items.map((item) => item.snippet);
      return snippets;
    });

    let fData = {};
    let flattenedData = preStructuredData.flat();

    for (let obj of flattenedData) {
      let publishedDate = dayjs(obj.publishedAt)
        .format("DD-MM-YYYY")
        .toString();
      const data = new Data(
        obj.thumbnails.maxres ? obj.thumbnails.maxres : obj.thumbnails.default,
        obj.title,
        obj.resourceId.videoId,
      );
      if (!fData[publishedDate]) {
        fData[publishedDate] = [data];
      } else {
        fData[publishedDate].push(data);
      }
    }

    this.FormattedData = fData;
  }

  /**
   * Function to standardize the data format for usage in another parts of the application.
   * @param {string} initialRange The date before which the data will be valid.
   * @returns {undefined}
   */
  standardizeDataFormatInRange(initialRange, finalRange) {
    let preStructuredData = this.FetchedData.map((element) => {
      let snippets = element.items.map((item) => item.snippet);
      return snippets;
    });

    let fData = {};
    let flattenedData = preStructuredData.flat();

    for (let obj of flattenedData) {
      // const dateObj = dayjs(obj.publishedAt);
      const dateObj = dayjs(obj.publishedAt, "YYYY-MM-DD");
      initialRange = dayjs(initialRange);
      finalRange = dayjs(finalRange);
      if (
        (dateObj.isAfter(initialRange) || dateObj.isSame(initialRange)) &&
        (dateObj.isBefore(finalRange) || dateObj.isSame(finalRange))
      ) {
        let publishedDate = dateObj.format("DD-MM-YYYY").toString();
        const data = new Data(
          obj.thumbnails.maxres
            ? obj.thumbnails.maxres
            : obj.thumbnails.default,
          obj.title,
          obj.resourceId.videoId,
        );
        if (!fData[publishedDate]) {
          fData[publishedDate] = [data];
        } else {
          fData[publishedDate].push(data);
        }
      }
    }

    this.FormattedData = fData;
  }

  /**
   * @returns {object}
   * @throws {Error}
   */
  get FormattedData() {
    if (!this.#formattedData) {
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
    if (!value) {
      throw new Error("inappropriate value getting assigned to formattedData");
    }
    this.#formattedData = value;
  }

  /**
   * @returns {object}
   * @throws {Error}
   */
  get FetchedData() {
    if (!this.#fetchedData) {
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
    if (!value) {
      throw new Error("inappropriate value getting assigned to fetchedData");
    }
    this.#fetchedData = value;
  }

  getMonthlyData(month) {
    // loop over the json and provide the data of the provided month.
  }
}
