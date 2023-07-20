import { CALENDARPAGE, HOMEPAGE } from "../../variables";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState } from "react";

export default function DateRangePage({ setPage }) {
  const [endDate, setEndDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs());

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
      <div style={{ display: "flex", flexDirection: "row", margin: "1rem 0" }}>
        <TextField
          id="outlined-basic"
          label="Start"
          variant="outlined"
          InputProps={{ readOnly: true }}
          value={startDate.format("DD MMM YYYY")}
        />
        <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>to</p>
        <TextField
          id="outlined-basic"
          label="End"
          variant="outlined"
          InputProps={{ readOnly: true }}
          value={endDate.format("DD MMM YYYY")}
        />
      </div>

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
          Proceed
        </Button>
      </div>
    </div>
  );
}
