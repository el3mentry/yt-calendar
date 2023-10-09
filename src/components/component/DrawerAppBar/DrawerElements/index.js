import { Box } from "@mui/material";
import ChangePage from "./ChangePage";
import ChangeView from "./ChangeView";
import DateRange from "./DateRange";
import TotalVids from "./TotalVids";

export default function DrawerElements({
  setPage,
  changeCalendarView,
  calendarView,
  startDate,
  endDate,
  date,
  totalVideoCount,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexGrow: 1,
        flexShrink: 1,
      }}
    >
      <ChangePage setPage={setPage} />
      <ChangeView
        changeCalendarView={changeCalendarView}
        calendarView={calendarView}
      />
      <DateRange
        startDate={startDate}
        endDate={endDate}
        date={date}
        calendarView={calendarView}
      />
      <TotalVids totalVideoCount={totalVideoCount} />
    </Box>
  );
}
