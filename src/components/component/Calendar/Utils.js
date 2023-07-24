import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dateFormat = "M-D-YYYY";

export const daysOfTheWeek = [
  'M', 'T', 'W', 'T', 'F', 'S', 'S'
];

export const daysOfTheWeekOffset = [
  '6', '5', '4', '3', '2', '0', '1'
];

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

export const formatBookingsData = ({ bookings, year }) => {
  if (!Array.isArray(bookings) || bookings.length < 1) return [];

  const arr = [];

  bookings.forEach((booking) => {
    const from = booking?.from;
    const to = booking?.to;
    const middayCheckout = booking?.middayCheckout;

    const validStartDate = dayjs(from).year() === Number(year);
    const validEndDate = dayjs(to).year() === Number(year);

    if (!validStartDate && !validEndDate) return null;

    const nxtBooking = {
      from: dayjs(from).format(dateFormat),
      to: dayjs(to).format(dateFormat),
      middayCheckout,
    };

    arr.push(nxtBooking);
  });

  return arr;
};

export const getDatesInRange = ({ startDate, endDate }) => {
  let _startDate = dayjs(startDate, "M-D-YYYY");
  const _endDate = dayjs(endDate, "M-D-YYYY");

  const dates = [];

  while (!_startDate.isAfter(_endDate)) {
    dates.push(_startDate.format(dateFormat));

    _startDate = _startDate.add(1, "day");
  }

  return dates;
};

export const getAllBookedDays = ({ dates }) => {
  if (!Array.isArray(dates) || dates.length < 1) return [];

  const arr = [];

  dates.forEach(({ to, from }) => {
    const nxt = getDatesInRange({ startDate: from, endDate: to });

    nxt.forEach((_date) => {
      arr.push(_date);
    });
  });

  return arr;
};

export const getAllHalfDays = ({ dates }) => {
  if (!Array.isArray(dates) || dates.length < 1) return [];

  const arr = [];

  dates.forEach(({ to, middayCheckout }) => {
    if (middayCheckout && typeof to === "string") {
      arr.push(to);
    }
  });

  return arr;
};

export const handleBookings = ({ bookings, year }) => {
  const dates = formatBookingsData({ bookings, year });
  const bookedDays = getAllBookedDays({ dates });
  const halfDays = getAllHalfDays({ dates });

  return { halfDays, bookedDays };
};
