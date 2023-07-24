import { useState } from "react";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import DateRangePage from "./pages/DateRangePage";
import { HOMEPAGE, CALENDARPAGE, DATERANGEPAGE } from "../variables";

export default function Main() {
  const [page, setPage] = useState(HOMEPAGE);

  function getPageType() {
    if (page === HOMEPAGE) return <HomePage setPage={setPage} />;
    else if (page === DATERANGEPAGE) return <DateRangePage setPage={setPage} />;
    else if (page === CALENDARPAGE) return <CalendarPage setPage={setPage} />;
    else return "";
  }

  return <>{getPageType()}</>;
}
