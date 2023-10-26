import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import Box from "@mui/material/Box";

export default function FullDatePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  sx,
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", ...sx }}>
      <Box
        sx={{
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
      </Box>
      <Box
        sx={{
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
      </Box>
    </Box>
  );
}
