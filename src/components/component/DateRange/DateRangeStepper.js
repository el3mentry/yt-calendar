import MobileStepper from "@mui/material/MobileStepper";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function DateRangeStepper({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  sx,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #c4c4c4",
        borderRadius: "16px",
        paddingTop: "10px",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeStep === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="starting range"
              variant="outlined"
              InputProps={{ readOnly: true }}
              focused={false}
              value={startDate ? startDate.format("Do MMMM, YYYY") : "-"}
              sx={{ width: 3.3 / 4 }}
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
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="ending range"
              variant="outlined"
              InputProps={{ readOnly: true }}
              focused={false}
              value={endDate ? endDate.format("Do MMMM, YYYY") : "-"}
              sx={{ width: 3.3 / 4 }}
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
        )}
      </Box>
      <MobileStepper
        variant="dots"
        steps={2}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}
