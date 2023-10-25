import { Box } from "@mui/material";
import ChangePage from "./ChangePage";
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
        justifyContent: "flex-start",
        flexGrow: 1,
        flexShrink: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          flexBasis: "200px",
          marginBottom: "3rem",
        }}
      >
        <ChangePage
          setPage={setPage}
          changeCalendarView={changeCalendarView}
          calendarView={calendarView}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginBottom: "3rem",
        }}
      >
        <DateRange
          startDate={startDate}
          endDate={endDate}
          date={date}
          calendarView={calendarView}
        />
      </Box>
      <TotalVids totalVideoCount={totalVideoCount} />
    </Box>
  );
}
