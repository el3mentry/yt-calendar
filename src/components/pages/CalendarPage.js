import YearlyCalendar from "../component/YearlyCalendar";
import Navbar from "../component/Navbar";
import { useState } from "react";
import dayjs from "dayjs";
import { YEAR } from "../../variables";
import React from "react";
import DataFetcher from "../../services/DataFetcher";
import DataFormatter from "../../services/DataFormatter";
import ChannelInfoProvider from "../../services/ChannelInfoProvider";

export default function CalendarPage({ startDate, endDate, channelId, setPage }) {
  const [calendarView, setCalendarView] = useState(YEAR);
  const [date, setDate] = useState(dayjs());
  const [channelName, setChannelName] = useState("");
  const [channelThumbnail, setChannelThumbnail] = useState("");
  const [formattedData, setFormattedData] = useState({});

  React.useEffect(() => {
    (async () => {
      const dataFetcher = new DataFetcher(channelId, startDate, endDate);
      await dataFetcher.initializeFetching();

      const dataFormatter = new DataFormatter(dataFetcher.YoutubeResponses);
      dataFormatter.standardizeDataFormatInRange(startDate, endDate);

      const channelInfoProvider = new ChannelInfoProvider(channelId);
      await channelInfoProvider.fetchChannelInfo();

      setChannelName(channelInfoProvider.getChannelTitle());
      setChannelThumbnail(channelInfoProvider.getChannelThumbnail());
      setFormattedData(dataFormatter.FormattedData);
    })();
  // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col height-full width-full min-height-100vh max-height-100vh min-width-100vw max-width-100vw">
      <div
        style={{
          height: "70px",
          position: "fixed",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar
          calendarView={calendarView}
          setCalendarView={setCalendarView}
          date={date}
          setDate={setDate}
          startDate={startDate}
          endDate={endDate}
          channelName={channelName}
          channelThumbnail={channelThumbnail}
          setPage={setPage}
        />
      </div>

      <div
        className="width-full flex"
        style={{ flexGrow: 1, marginTop: "75px" }}
      >
        <YearlyCalendar
          showNumberOfMonths={calendarView}
          date={date}
          formattedData={formattedData}
        />
      </div>
    </div>
  );
}
