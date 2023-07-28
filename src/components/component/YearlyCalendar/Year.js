import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { daysOfTheWeek, daysOfTheWeekOffset, getMonthName } from "./Utils";
import Day from "../Day";

dayjs.extend(isBetween);

const Year = ({ activeYear, showNumberOfMonths = 12, monthsFrom = 1 }) => {
  const _year = activeYear || dayjs().year();

  return (
    <div className="year" data-testid="year">
      {new Array(showNumberOfMonths).fill("").map((_, pos) => {
        const arrOffset = 1;
        const month = monthsFrom + pos;
        const date = `${_year}-${month}`;
        const monthName = getMonthName(month);
        const totalDays = dayjs(date).daysInMonth();
        const firstDayOfWeek = dayjs(`${date}-01`).day();

        const offsetDays =
          firstDayOfWeek !== 0
            ? new Array(firstDayOfWeek - arrOffset).fill("")
            : new Array(Number(daysOfTheWeekOffset[firstDayOfWeek])).fill("");

        const daysArr = new Array(totalDays).fill("");

        return (
          <div key={pos} className="month" data-testid="month">
            <div id="month-resizable-div">
              <h3 className="monthName">{monthName}</h3>

              <div className="content dayOfTheWeek">
                {daysOfTheWeek.map((dayOfTheWeek, pos) => {
                  return (
                    <div key={pos} className="day">
                      {dayOfTheWeek}
                    </div>
                  );
                })}
              </div>

              <div className="content">
                {offsetDays.map((_, pos) => {
                  return <div key={pos} className="day" />;
                })}

                {daysArr.map((_, pos) => {
                  const day = pos + arrOffset;
                  return (
                    <div key={pos} className="day">
                      {/* Inject the new Day component */}
                      <Day dayValue={day} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Year;
