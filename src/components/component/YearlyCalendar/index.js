import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isValidMonthsOption } from "./Utils";
import Year from "./Year";
import { YEAR } from "../../../variables";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

dayjs.extend(isBetween);

const YearlyCalendar = ({ showNumberOfMonths, date, setDate }) => {
  const year = date.year();
  const totalCalendarMonths = 12;
  const _showNumberOfMonths = isValidMonthsOption(showNumberOfMonths)
    ? showNumberOfMonths
    : totalCalendarMonths;
  const localizer = momentLocalizer(moment);

  const configYear = {
    showNumberOfMonths: _showNumberOfMonths,
    activeYear: year,
    monthsFrom: showNumberOfMonths === YEAR ? 1 : dayjs().month() + 1,
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
        {showNumberOfMonths === YEAR ? (
          <Year {...configYear} />
        ) : (
          <Calendar
            date={date.toString()}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "80vh", width: "80vw" }}
            toolbar={false}
            onNavigate={(date) => {
              setDate(date);
            }}
            views={[Views.MONTH]}
          />
        )}
      </div>
    </section>
  );
};

export default YearlyCalendar;
