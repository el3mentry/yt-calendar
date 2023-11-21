import Box from "@mui/material/Box";
import React from "react";
import TotalVids from "./TotalVids";
import { useEffect, useState } from "react";
import { YEAR } from "../../../variables";
import dayjs from "dayjs";

export default function RightNavbarSection({
  startDate,
  endDate,
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

    const currentMonth = date.month();
    const initialRangeMonth = parseInt(startDate.month());
    const finalRangeMonth = parseInt(endDate.month());

    if (calendarView === YEAR) {
      setStartDateFill(
        currentYear < initialRangeYear ? ERROR_TEXT_FILL : NORMAL_TEXT_FILL
      );
      setEndDateFill(
        currentYear > finalRangeYear ? ERROR_TEXT_FILL : NORMAL_TEXT_FILL
      );
    } else {
      setStartDateFill(
        (currentYear < initialRangeYear && currentMonth < initialRangeMonth) || 
        (currentYear === initialRangeYear && currentMonth < initialRangeMonth) || 
        (currentYear < initialRangeYear && currentMonth === initialRangeMonth) ||
        (currentYear < initialRangeYear && currentMonth > initialRangeMonth)
          ? ERROR_TEXT_FILL
          : NORMAL_TEXT_FILL
      );
      setEndDateFill(
        (currentYear > finalRangeYear && currentMonth > finalRangeMonth) ||
        (currentYear === finalRangeYear && currentMonth > finalRangeMonth) ||
        (currentYear > finalRangeYear && currentMonth === finalRangeMonth) ||
        (currentYear > finalRangeYear && currentMonth < finalRangeMonth)
          ? ERROR_TEXT_FILL
          : NORMAL_TEXT_FILL
      );
      debugger;
    }
    // eslint-disable-next-line
  }, [date]);

  return (
    <Box
      id="navbar-right-section"
      sx={{
        display: "flex",
        flex: "1 0 100px",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "40px",
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          // padding: "0 5px 0 5px",
          color: "#6d6d6d",
        }}
      >
        <TotalVids totalVideoCount={totalVideoCount} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {startDate !== null && endDate !== null ? (
            <>
              <p
                style={{
                  color: startDateFill,
                  fontWeight: startDateFill === ERROR_TEXT_FILL ? 600 : 400,
                  fontSize: "0.8rem",
                  marginLeft: "8px",
                  marginRight: "8px",
                  textAlign: "center",
                }}
              >
                {startDate.format("Do MMM 'YY")}
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                }}
              >
                -
              </p>
              <p
                style={{
                  color: endDateFill,
                  fontWeight: endDateFill === ERROR_TEXT_FILL ? 600 : 400,
                  fontSize: "0.8rem",
                  marginLeft: "8px",
                  marginRight: "8px",
                  textAlign: "center",
                }}
              >
                {endDate.format("Do MMM 'YY")}
              </p>
            </>
          ) : (
            "Do MMM' YY - Do MMM' YY"
          )}
        </div>
      </Box>
    </Box>
  );
}
