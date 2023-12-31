import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isValidMonthsOption } from "./Common/Utils";
import Year from "./Year";
import { YEAR } from "../../../variables";
import Month from "./Month";

dayjs.extend(isBetween);

const Calendar = ({
  showNumberOfMonths,
  date,
  formattedData,
  setDate,
  endDate,
  changeToNextMonth,
  changeToPreviousMonth,
  changeToNextYear,
  changeToPreviousYear,
}) => {
  const year = date.year();
  const totalCalendarMonths = 12;
  const _showNumberOfMonths = isValidMonthsOption(showNumberOfMonths)
    ? showNumberOfMonths
    : totalCalendarMonths;

  const configYear = {
    showNumberOfMonths: _showNumberOfMonths,
    activeYear: year,
    monthsFrom: showNumberOfMonths === YEAR ? 1 : date.month() + 1,
  };

  const layoutClassName =
    _showNumberOfMonths !== totalCalendarMonths
      ? _showNumberOfMonths > 1
        ? "twoCol"
        : "singleCol"
      : "";

  return (
    <section
      className={`calendar ${layoutClassName} width-full flex`}
      style={{ flexGrow: 1 }}
      data-testid="calendar"
    >
      <div className="wrap flex width-full" style={{ flexGrow: 1 }}>
        {showNumberOfMonths === YEAR ? (
          <Year
            {...configYear}
            formattedData={formattedData}
            changeToNextYear={changeToNextYear}
            changeToPreviousYear={changeToPreviousYear}
          />
        ) : (
          <Month
            date={date}
            formattedData={formattedData}
            endDate={endDate}
            setDate={setDate}
            changeToNextMonth={changeToNextMonth}
            changeToPreviousMonth={changeToPreviousMonth}
          />
        )}
      </div>
    </section>
  );
};

export default Calendar;
