import React, { useEffect, useState, useCallback } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isValidMonthsOption } from "./Utils";
import Year from "./Year";

dayjs.extend(isBetween);

const YearlyCalendar = ({ showNumberOfMonths, year }) => {
  const initialMonth = 1;
  const initialPage = 1;
  const totalCalendarMonths = 12;
  const _showNumberOfMonths = isValidMonthsOption(showNumberOfMonths)
    ? showNumberOfMonths
    : totalCalendarMonths;
  const [monthsFrom, setMonthsFrom] = useState(initialMonth);
  const [page, setPage] = useState(initialPage);

  const totalPages = totalCalendarMonths / _showNumberOfMonths;

  const goToPage = useCallback(
    (_page) => {
      const _monthsFrom = _page * _showNumberOfMonths - _showNumberOfMonths + 1;
      setMonthsFrom(_monthsFrom);
      setPage(_page);
    },
    [_showNumberOfMonths]
  );

  const findActivePage = useCallback(() => {
    const now = dayjs();
    const _month = now.month() + 1;
    let _page = 1;
    for (let i = 1; i <= totalPages; i++) {
      const found = _month <= i * _showNumberOfMonths;
      _page = i;
      if (found) break;
    }

    goToPage(_page);
  }, [goToPage, _showNumberOfMonths, totalPages]);

  useEffect(() => {
    if (_showNumberOfMonths !== totalCalendarMonths) {
      findActivePage();
    }
  }, [findActivePage, _showNumberOfMonths, page]);

  const configYear = {
    showNumberOfMonths: _showNumberOfMonths,
    activeYear: year,
    monthsFrom,
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
