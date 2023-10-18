import ChangeView from "./ChangePage";
import Box from "@mui/material/Box";
import React from "react";
import TotalVids from "./TotalVids";
import { useEffect, useState } from "react";
import { YEAR } from "../../../variables";
import dayjs from "dayjs";

export default function RightNavbarSection({
  startDate,
  endDate,
  setPage,
  totalVideoCount,
  date,
  calendarView,
}) {
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
      id="navbar-right-section"
      sx={{
        display: "flex",
        flex: "1 1 100px",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: "40px",
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          // padding: "0 5px 0 5px",
          minWidth: "8rem",
          color: "#6d6d6d",
          marginRight: "0.65rem",
        }}
      >
        <TotalVids totalVideoCount={totalVideoCount} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "0.5rem",
          }}
        >
          {startDate !== null && endDate !== null ? (
            <>
              <div
                style={{
                  color: startDateFill,
                  fontWeight: startDateFill === ERROR_TEXT_FILL ? 600 : 400,
                  fontSize: "0.8rem",
                }}
              >
                {startDate.format("Do MMM 'YY")}
              </div>
              <div
                style={{
                  width: "25px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                }}
              >
                -
              </div>
              <div
                style={{
                  color: endDateFill,
                  fontWeight: endDateFill === ERROR_TEXT_FILL ? 600 : 400,
                  fontSize: "0.8rem",
                }}
              >
                {endDate.format("Do MMM 'YY")}
              </div>
            </>
          ) : (
            "Do MMM' YY - Do MMM' YY"
          )}
        </div>
      </Box>

      <ChangeView setPage={setPage} />
    </Box>
  );
}
