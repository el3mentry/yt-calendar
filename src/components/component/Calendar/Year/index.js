import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { daysOfTheWeek, daysOfTheWeekOffset, getMonthName } from "../Common/Utils";
import Day from "./Day";

dayjs.extend(isBetween);

const Year = ({
  activeYear,
  date,
  showNumberOfMonths = 12,
  monthsFrom = 1,
  formattedData = {},
}) => {
  return (
    <div className="year" data-testid="year">
      {new Array(showNumberOfMonths).fill("").map((_, pos) => {
        const arrOffset = 1;
        const month = monthsFrom + pos;
        const _year = activeYear || date.year();
        const strippedDate = `${_year}-${month}`;
        const monthName = getMonthName(month);
        const totalDays = dayjs(strippedDate).daysInMonth();
        const firstDayOfWeek = dayjs(`${strippedDate}-01`).day();

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
                  const date = dayjs(_year + "-" + month + "-" + day)
                    .format("DD-MM-YYYY")
                    .toString();
                  const options = formattedData[date];

                  return (
                    <div key={pos} className="day">
                      <Day dayValue={day} options={options} />
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
