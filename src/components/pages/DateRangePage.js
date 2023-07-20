import { CALENDARPAGE, HOMEPAGE } from "../../variables";
import { Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState } from "react";

export default function DateRangePage({ setPage }) {
  const [endDate, setEndDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs().add(-1, "month"));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={["year", "month", "day"]}
            disableFuture={true}
            minDate={dayjs("2006-01-01")}
            maxDate={dayjs()}
            onChange={(value) => setStartDate(value)}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={["year", "month", "day"]}
            value={endDate}
            disableFuture={true}
            minDate={dayjs("2006-01-01")}
            maxDate={dayjs(new Date())}
            onChange={(value) => setEndDate(value)}
          />
        </LocalizationProvider>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{ mr: "1rem" }}
          onClick={() => setPage(HOMEPAGE)}
          variant="outlined"
        >
          Back
        </Button>
        <Button onClick={() => setPage(CALENDARPAGE)} variant="contained">
          View YT Calendar
        </Button>
      </div>
    </div>
  );
}
