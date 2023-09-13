import React, { useState } from "react";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import DateRangePage from "./pages/DateRangePage";
import { HOMEPAGE, CALENDARPAGE, DATERANGEPAGE } from "../variables";

export default function Main() {
  const [page, setPage] = useState(HOMEPAGE);
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [channelId, setChannelId] = useState("");

  function getPageType() {
    if (page === HOMEPAGE)
      return <HomePage setPage={setPage} setChannelId={setChannelId} />;
    else if (page === DATERANGEPAGE && channelId !== "")
      return (
        <DateRangePage
          channelId={channelId}
          setChannelId={setChannelId}
          setPage={setPage}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      );
    else if (page === CALENDARPAGE && channelId !== "")
      return (
        <CalendarPage
          channelId={channelId}
          setChannelId={setChannelId}
          startDate={startDate}
          endDate={endDate}
        />
      );
    else {
      return <HomePage setPage={setPage} setChannelId={setChannelId} />;
    }
  }

  return <>{getPageType()}</>;
}
