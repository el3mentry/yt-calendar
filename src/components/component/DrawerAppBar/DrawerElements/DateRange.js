import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { YEAR } from "../../../../variables";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

export default function DateRange({ startDate, endDate, date, calendarView }) {
  const NORMAL_TEXT_FILL = "#fff";
  const ERROR_TEXT_FILL = "#ff5a5a";
  const [startDateFill, setStartDateFill] = useState(NORMAL_TEXT_FILL);
  const [endDateFill, setEndDateFill] = useState(NORMAL_TEXT_FILL);

  const ColorButton = styled(ButtonBase)(() => ({
    borderRadius: "25px",
    fontFamily: '"inter" , "Open Sans", "sans-serif"',
    backgroundColor: "#3365E7",
    height: "40px",
    minWidth: "90%",
    paddingLeft: "0.9rem",
    paddingRight: "0.9rem",
    fontSize: "0.9rem",
    cursor: "default"
  }));

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "0.5rem",
      }}
    >
      {startDate !== null && endDate !== null ? (
        <>
          <ColorButton
            sx={{
              color: startDateFill,
              fontWeight: startDateFill === ERROR_TEXT_FILL ? 600 : 500,
            }}
            onClick={null}
          >
            {startDate.format("Do MMM 'YY")}
          </ColorButton>
          <Box
            style={{
              width: "2rem",
              textAlign: "center",
              fontSize: "0.8rem",
              borderBottom: "2px solid black",
              height: "1rem",
              marginBottom: "0.9rem"
            }}
          >
          </Box>
          <ColorButton
            sx={{
              color: endDateFill,
              fontWeight: endDateFill === ERROR_TEXT_FILL ? 600 : 500,
            }}
            onClick={null}
          >
            {endDate.format("Do MMM 'YY")}
          </ColorButton>
        </>
      ) : (
        "Do MMM' YY - Do MMM' YY"
      )}
    </Box>
  );
}
