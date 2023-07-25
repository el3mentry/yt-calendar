import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const daysOfTheWeek = ["M", "T", "W", "T", "F", "S", "S"];

export const daysOfTheWeekOffset = ["6", "5", "4", "3", "2", "0", "1"];

export const isValidMonthsOption = (numOfMonths) => {
  if (!numOfMonths || typeof numOfMonths !== "number") return false;

  const validOptions = [12, 4, 2, 1];
  const isValid = validOptions.includes(numOfMonths);

  return isValid;
};

export const getMonthName = (month) => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return months[month];
};
