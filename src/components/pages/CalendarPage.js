import Calendar from "../component/Calendar";
import { useState } from "react";
import dayjs from "dayjs";
import { YEAR } from "../../variables";
import React from "react";
import DataFetcher from "../../services/DataFetcher";
import DataFormatter from "../../services/DataFormatter";
import ChannelInfoProvider from "../../services/ChannelInfoProvider";
import DrawerAppBar from "../component/DrawerAppBar";

export default function CalendarPage({
  startDate,
  endDate,
  channelId,
  setPage,
}) {
  const [calendarView, setCalendarView] = useState(YEAR);
  const [date, setDate] = useState(dayjs());
  const [channelName, setChannelName] = useState("");
  const [channelThumbnail, setChannelThumbnail] = useState("");
  const [formattedData, setFormattedData] = useState({});
  const [totalVideoCount, setTotalVideoCount] = useState(0);
  const [channelUsername, setChannelUsername] = useState("");
  const [errorState, setErrorState] = useState(null);

  function changeToPreviousYear() {
    setDate((prev) => {
      return prev.year() === 2006 ? prev : prev.subtract(1, "y");
    });
  }

  function changeToNextYear() {
    setDate((prev) => {
      return prev.year() === dayjs().year() ? prev : prev.add(1, "y");
    });
  }

  function changeToPreviousMonth() {
    setDate((prev) => {
      return prev.year() === 2006 && prev.month() === 4
        ? prev
        : prev.subtract(1, "M");
    });
  }

  function changeToNextMonth() {
    setDate((prev) => {
      return prev.year() === dayjs().year() && prev.month() === dayjs().month()
        ? prev
        : prev.add(1, "M");
    });
  }

  React.useEffect(() => {
    if (errorState !== null) throw new Error(errorState);
  }, [errorState]);

  React.useEffect(() => {
    (async () => {
      try {
        const dataFetcher = new DataFetcher(channelId, startDate, endDate);
        await dataFetcher.initializeFetching();

        const dataFormatter = new DataFormatter(dataFetcher.YoutubeResponses);
        dataFormatter.standardizeDataFormatInRange(startDate, endDate);

        const channelInfoProvider = new ChannelInfoProvider(channelId);
        await channelInfoProvider.fetchChannelInfo();

        setChannelName(channelInfoProvider.getChannelTitle());
        setChannelThumbnail(channelInfoProvider.getChannelThumbnail());
        setChannelUsername(channelInfoProvider.getChannelUsername());
        setFormattedData(dataFormatter.FormattedData);
        setTotalVideoCount(dataFormatter.TotalVideoCount);
      } catch (error) {
        setErrorState(error);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col width-full min-height-100vh min-width-100vw max-width-100vw">
      <div
        style={{
          height: "70px",
          position: "fixed",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DrawerAppBar
          calendarView={calendarView}
          setCalendarView={setCalendarView}
          date={date}
          setDate={setDate}
          startDate={startDate}
          endDate={endDate}
          channelName={channelName}
          channelThumbnail={channelThumbnail}
          channelUsername={channelUsername}
          setPage={setPage}
          totalVideoCount={totalVideoCount}
          changeToPreviousYear={changeToPreviousYear}
          changeToNextYear={changeToNextYear}
          changeToPreviousMonth={changeToPreviousMonth}
          changeToNextMonth={changeToNextMonth}
        />
      </div>

      <div
        className="width-full flex"
        style={{ flexGrow: 1, marginTop: "75px" }}
      >
        <Calendar
          showNumberOfMonths={calendarView}
          date={date}
          formattedData={formattedData}
          endDate={endDate}
          setDate={setDate}
          changeToPreviousYear={changeToPreviousYear}
          changeToNextYear={changeToNextYear}
          changeToPreviousMonth={changeToPreviousMonth}
          changeToNextMonth={changeToNextMonth}
        />
      </div>
    </div>
  );
}
