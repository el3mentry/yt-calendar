import React from "react";
import moment from "moment";
import Day from "../Day";
import dayjs from "dayjs";

const Month = ({ date, formattedData }) => {
  const year = date.year();
  const month = date.month();

  const generateCalendarGrid = () => {
    const startOfMonth = moment([year, month]).startOf("month");
    const endOfMonth = moment([year, month]).endOf("month");
    const startOfWeek = startOfMonth.startOf("week");
    const endOfWeek = endOfMonth.endOf("week");

    let calendarGrid = [];
    let currentDay = startOfWeek.clone();

    while (currentDay.isSameOrBefore(endOfWeek)) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDay.clone());
        currentDay.add(1, "day");
      }
      calendarGrid.push(week);
    }

    return calendarGrid;
  };

  const calendarGrid = generateCalendarGrid();

  return (
    <div className="flex width-full">
      <div className="month-calendar">
        <div className="month-calendar-header">
          {moment.weekdaysShort().map((day) => (
            <div key={day} className="month-calendar-header-cell">
              {day}
            </div>
          ))}
        </div>
        {calendarGrid.map((week, index) => (
          <div key={index} className="month-calendar-row">
            {week.map((day) => {
              const date = dayjs(day.toString())
                .format("DD-MM-YYYY")
                .toString();
              const options = formattedData[date];
              console.log(date, options);
              return (
                <Day
                  key={day.format("YYYY-MM-DD")}
                  dayValue={day.format("D")}
                  className={"month-calendar-cell"}
                  viewType="month"
                  options={options}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Month;
