import Data from "./Data";
import dayjs from "dayjs";

export default class DataFormatter {
  #fetchedData = null;
  #formattedData = null;
  #totalVideoCount = 0;

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
        this.TotalVideoCount = this.TotalVideoCount + 1;
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

  /**
   * Property to access the total video count in a selected range provided through the dataformatter constructor.
   * @returns {number}
   * @throws {Error}
   */
  get TotalVideoCount() {
    if (this.#totalVideoCount !== 0 && !this.#totalVideoCount)
      throw new Error(
        "inappropriate value stored. Total Video Count = " +
          this.#totalVideoCount,
      );
    return this.#totalVideoCount;
  }

  /**
   * Property to set the total video count in a selected range provided through the dataformatter constructor.
   * @return {undefined}
   * @param {number} value
   * @throws {Error}
   */
  set TotalVideoCount(value) {
    if (value !== 0 && !value)
      throw new Error(
        "Can not set value to TotalVideoCount prop. Value received: " + value,
      );
    this.#totalVideoCount = value;
  }
}
