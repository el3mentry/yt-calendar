import { MONTH, YEAR } from "../../../variables";
import Box from "@mui/material/Box";
import LeftNavbarSection from "./LeftNavbarSection";
import MiddleNavbarSection from "./MiddleNavbarSection";
import RightNavbarSection from "./RightNavbarSection";

export default function Navbar({
  calendarView,
  setCalendarView,
  date,
  setDate,
  setPage,
  totalVideoCount = 0,
  startDate = null,
  endDate = null,
  channelName = "ChannelName",
  channelThumbnail = "",
}) {
  function changeCalendarView() {
    if (calendarView === MONTH) setCalendarView(YEAR);
    else setCalendarView(MONTH);
  }
  return (
    <Box
      id="navbar-box"
      sx={{
        height: "60px",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        flexGrow: 1,
        zIndex: "99",
        position: "relative",
      }}
    >
      <LeftNavbarSection
        channelName={channelName}
        channelThumbnail={channelThumbnail}
      />
      <MiddleNavbarSection
        calendarView={calendarView}
        changeCalendarView={changeCalendarView}
        date={date}
        setDate={setDate}
      />
      <RightNavbarSection
        startDate={startDate}
        endDate={endDate}
        setPage={setPage}
        totalVideoCount={totalVideoCount}
      />
    </Box>
  );
}
