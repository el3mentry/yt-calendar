import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isValidMonthsOption } from "./Utils";
import Year from "./Year";
import { YEAR } from "../../../variables";

dayjs.extend(isBetween);

const YearlyCalendar = ({ showNumberOfMonths, year, setCurrentMonth }) => {
  const totalCalendarMonths = 12;
  const _showNumberOfMonths = isValidMonthsOption(showNumberOfMonths)
    ? showNumberOfMonths
    : totalCalendarMonths;

  const configYear = {
    showNumberOfMonths: _showNumberOfMonths,
    activeYear: year,
    monthsFrom: (showNumberOfMonths === YEAR)? 1: dayjs().month() + 1,
    setCurrentMonth
  };

  const layoutClassName =
    _showNumberOfMonths !== totalCalendarMonths
      ? _showNumberOfMonths > 1
        ? "twoCol"
        : "singleCol"
      : "";

  return (
    <section className={`calendar ${layoutClassName}`} data-testid="calendar">
      <div className="wrap">
        <Year {...configYear} />
      </div>
    </section>
  );
};

export default YearlyCalendar;
