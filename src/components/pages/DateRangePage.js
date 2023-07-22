import { CALENDARPAGE, HOMEPAGE } from "../../variables";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { useState } from "react";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

export default function DateRangePage({ setPage }) {
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarVisible(false);
  };

  function clearDateRange() {
    setEndDate(null);
    setStartDate(null);
  }

  dayjs.extend(advancedFormat);

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
      <Grid item xs={6} textAlign="right">
        <Snackbar
          open={isSnackbarVisible}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            variant="filled"
            severity="error"
            sx={{ width: "100%" }}
          >
            End date must be exact or after start date.
          </Alert>
        </Snackbar>
      </Grid>

      <div style={{ display: "flex" }}>
        <TextField
          id="outlined-basic"
          label="Start"
          variant="outlined"
          InputProps={{ readOnly: true }}
          focused={false}
          value={startDate ? startDate.format("Do MMMM, YYYY") : "-"}
        />
        <p
          style={{
            marginLeft: "2.5rem",
            marginRight: "2.5rem",
            marginBottom: "2rem",
          }}
        >
          to
        </p>
        <TextField
          id="outlined-basic"
          label="End"
          variant="outlined"
          InputProps={{ readOnly: true }}
          focused={false}
          value={endDate ? endDate.format("Do MMMM, YYYY") : "-"}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={["year", "month", "day"]}
            disableFuture={true}
            value={startDate}
            minDate={dayjs("2006-01-01")}
            maxDate={dayjs()}
            disableHighlightToday={true}
            onChange={(value) => {
              setStartDate(value);
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={["year", "month", "day"]}
            disableFuture={true}
            value={endDate}
            disableHighlightToday={true}
            minDate={dayjs("2006-01-01")}
            maxDate={dayjs(new Date())}
            onChange={(value) => {
              setEndDate(value);
            }}
          />
        </LocalizationProvider>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}
      >
        <Button
          sx={{ mr: "1rem" }}
          onClick={() => setPage(HOMEPAGE)}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          onClick={clearDateRange}
          sx={{ mr: "1rem", color: "gray", borderColor: "gray" }}
          variant="outlined"
        >
          Clear Range
        </Button>
        <Button
          onClick={() => {
            if (startDate.isBefore(endDate) || startDate.isSame(endDate))
              setPage(CALENDARPAGE);
            else setIsSnackbarVisible(true);
          }}
          variant="contained"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
