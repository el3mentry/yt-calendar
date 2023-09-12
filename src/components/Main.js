import { useState } from "react";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import DateRangePage from "./pages/DateRangePage";
import { HOMEPAGE, CALENDARPAGE, DATERANGEPAGE } from "../variables";

export default function Main() {
  const [page, setPage] = useState(HOMEPAGE);
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  function getPageType() {
    if (page === HOMEPAGE) return <HomePage setPage={setPage} />;
    else if (page === DATERANGEPAGE)
      return (
        <DateRangePage
          setPage={setPage}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      );
    else if (page === CALENDARPAGE)
      return (
        <CalendarPage
          setPage={setPage}
          startDate={startDate}
          endDate={endDate}
        />
      );
    else return "";
  }

  // return <>{getPageType()}</>;
  return <CalendarPage />;
}
