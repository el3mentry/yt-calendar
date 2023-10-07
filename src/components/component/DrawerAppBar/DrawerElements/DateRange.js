import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { YEAR } from "../../../../variables";
import dayjs from "dayjs";

export default function DateRange({ startDate, endDate, date, calendarView }) {
  const NORMAL_TEXT_FILL = "#6d6d6d";
  const ERROR_TEXT_FILL = "#ff5a5a";
  const [startDateFill, setStartDateFill] = useState(NORMAL_TEXT_FILL);
  const [endDateFill, setEndDateFill] = useState(NORMAL_TEXT_FILL);

  useEffect(() => {
    const currentYear = parseInt(date.year());
    const initialRangeYear = parseInt(startDate.year());
    const finalRangeYear = parseInt(endDate.year());

    const currentMonthAndYear = dayjs(`${currentYear}-${date.month()}-01`);
    const initialMonthAndYear = dayjs(`${currentYear}-${startDate.month()}-01`);
    const finalMonthAndYear = dayjs(`${currentYear}-${endDate.month()}-01`);

    if (calendarView === YEAR) {
      setStartDateFill(
        currentYear < initialRangeYear ? ERROR_TEXT_FILL : NORMAL_TEXT_FILL
      );
      setEndDateFill(
        currentYear > finalRangeYear ? ERROR_TEXT_FILL : NORMAL_TEXT_FILL
      );
    } else {
      setStartDateFill(
        currentMonthAndYear.isBefore(initialMonthAndYear)
          ? ERROR_TEXT_FILL
          : NORMAL_TEXT_FILL
      );
      setEndDateFill(
        currentMonthAndYear.isAfter(finalMonthAndYear)
          ? ERROR_TEXT_FILL
          : NORMAL_TEXT_FILL
      );
    }
    // eslint-disable-next-line
  }, [date]);
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "0.5rem",
      }}
    >
      {startDate !== null && endDate !== null ? (
        <>
          <Box
            style={{
              color: startDateFill,
              fontWeight: startDateFill === ERROR_TEXT_FILL ? 600 : 400,
              fontSize: "0.8rem",
            }}
          >
            {startDate.format("Do MMM 'YY")}
          </Box>
          <Box
            style={{
              width: "25px",
              textAlign: "center",
              fontSize: "0.8rem",
            }}
          >
            -
          </Box>
          <Box
            style={{
              color: endDateFill,
              fontWeight: endDateFill === ERROR_TEXT_FILL ? 600 : 400,
              fontSize: "0.8rem",
            }}
          >
            {endDate.format("Do MMM 'YY")}
          </Box>
        </>
      ) : (
        "Do MMM' YY - Do MMM' YY"
      )}
    </Box>
  );
}
