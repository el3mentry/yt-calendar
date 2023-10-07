import { CALENDARPAGE, HOMEPAGE, SIXYEARSINDAYS } from "../../variables";
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
import Box from "@mui/material/Box";
import Logo from "../component/DrawerAppBar/Logo";

export default function DateRangePage({
  setPage,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  dayjs.extend(advancedFormat);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarVisible(false);
  };

  const handleProceed = () => {
    if (startDate === null && endDate === null) {
      setIsSnackbarVisible(true);
      setSnackMessage("Start Date and End Date cannot be empty.");
      return;
    }

    const daysDifference = dayjs(endDate.format("YYYY-MM-DD")).diff(
      dayjs(startDate.format("YYYY-MM-DD")),
      "day",
    );

    if (
      (startDate.isBefore(endDate) || startDate.isSame(endDate)) &&
      daysDifference <= SIXYEARSINDAYS
    )
      setPage(CALENDARPAGE);
    else if (daysDifference > SIXYEARSINDAYS) {
      setIsSnackbarVisible(true);
      const message = `Range Limit is ${Math.floor(
        SIXYEARSINDAYS / 365,
      )} years. Exceeded by ${convertDays(
        daysDifference - SIXYEARSINDAYS,
      )} / (${daysDifference - SIXYEARSINDAYS} days)`;
      setSnackMessage(message);
    } else {
      setIsSnackbarVisible(true);
      setSnackMessage("End Date cannot be before Start Date.");
    }
  };

  function clearDateRange() {
    setEndDate(null);
    setStartDate(null);
  }

  function convertDays(numberToConvert) {
    const daysInYear = 365;
    const daysInMonth = 30;

    let years = Math.floor(numberToConvert / daysInYear);
    let months = Math.floor((numberToConvert % daysInYear) / daysInMonth);
    let days = Math.floor((numberToConvert % daysInYear) % daysInMonth);

    return `${years} years ${months} months ${days} days`;
  }

  return (
    <>
      <Box
        id="yt-cal-logo"
        sx={{ mt: "6px", top: "0", left: "1rem" }}
        className="p-fixed"
      >
        <Logo />
      </Box>
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
              {snackMessage}
            </Alert>
          </Snackbar>
        </Grid>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Start"
              variant="outlined"
              InputProps={{ readOnly: true }}
              focused={false}
              value={startDate ? startDate.format("Do MMMM, YYYY") : "-"}
              sx={{ width: 3 / 4 }}
            />
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
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="End"
              variant="outlined"
              InputProps={{ readOnly: true }}
              focused={false}
              value={endDate ? endDate.format("Do MMMM, YYYY") : "-"}
              sx={{ width: 3 / 4 }}
            />
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
          <Button onClick={handleProceed} variant="contained">
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
}
