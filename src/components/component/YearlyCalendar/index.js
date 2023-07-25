import React, { useEffect, useState, useCallback } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isValidMonthsOption } from "./Utils";
import Controls from "./Controls";
import Year from "./Year";

dayjs.extend(isBetween);

const YearlyCalendar = ({ showNumberOfMonths = 12, year = 2012 }) => {
  const initialMonth = 1;
  const initialPage = 1;
  const totalCalendarMonths = 12;
  const _showNumberOfMonths = isValidMonthsOption(showNumberOfMonths)
    ? showNumberOfMonths
    : totalCalendarMonths;
  const [activeYear, setActiveYear] = useState(year);
  const [monthsFrom, setMonthsFrom] = useState(initialMonth);
  const [page, setPage] = useState(initialPage);

  const totalPages = totalCalendarMonths / _showNumberOfMonths;

  const resetCalendarYear = () => {
    setMonthsFrom(initialMonth);
    setPage(initialPage);
  };

  const goToPage = useCallback(
    (_page) => {
      const _monthsFrom = _page * _showNumberOfMonths - _showNumberOfMonths + 1;
      setMonthsFrom(_monthsFrom);
      setPage(_page);
    },
    [_showNumberOfMonths],
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
  }, [findActivePage, _showNumberOfMonths]);

  const initCal = useCallback(() => {
    const now = dayjs();
    const _year = now.year();
    setActiveYear(_year);
    if (_showNumberOfMonths !== totalCalendarMonths) findActivePage();
    else resetCalendarYear();
  }, [findActivePage, _showNumberOfMonths]);

  const prev = useCallback(() => {
    const isFirstPage = page === 1;

    if (isFirstPage) {
      const _previousYear = dayjs(`${activeYear}`).subtract(1, "year").year();
      setActiveYear(_previousYear);

      if (_showNumberOfMonths === totalCalendarMonths) {
        resetCalendarYear();
        return;
      }

      const nxtStartingMonth = totalCalendarMonths - _showNumberOfMonths + 1;
      const nxtPage = totalPages;

      setMonthsFrom(nxtStartingMonth);
      setPage(nxtPage);
      return;
    }

    const nxtStartingMonth = monthsFrom - _showNumberOfMonths;
    const nxtPage = page - 1;
    setMonthsFrom(nxtStartingMonth);
    setPage(nxtPage);
  }, [page, _showNumberOfMonths, monthsFrom, totalPages, activeYear]);

  const next = useCallback(() => {
    const isLastPage = page === totalPages;
    if (isLastPage) {
      const _nextYear = dayjs(`${activeYear}`).add(1, "year").year();
      setActiveYear(_nextYear);
      resetCalendarYear();
      return;
    }

    const nxtStartingMonth = page * _showNumberOfMonths + 1;
    const nxtPage = page + 1;
    setMonthsFrom(nxtStartingMonth);
    setPage(nxtPage);
  }, [page, totalPages, _showNumberOfMonths, activeYear]);

  const configControls = {
    prev,
    next,
    initCal,
  };

  const configYear = {
    showNumberOfMonths: _showNumberOfMonths,
    activeYear,
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
        <div className="controlWrap">
          {/* <h1 className="currentYear" data-testid="currentYear">
            {activeYear}
          </h1> */}
          {/* <Controls {...configControls} /> */}
        </div>
        <Year {...configYear} />
      </div>
    </section>
  );
};

export default YearlyCalendar;
