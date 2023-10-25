import YearSelection from "./YearSelection";
import { MONTH, YEAR } from "../../../variables";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import MonthSelection from "./MonthSelection";
import React from "react";
import switchIcon from "../../../assets/switch-icon.svg";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  padding: "auto",
  borderColor: grey[400],
  borderRadius: "4px",
  height: "40px",
  fontFamily: '"Open Sans", "sans-serif"',
  "&:hover": {
    backgroundColor: grey[200],
    borderColor: grey[500],
  },
}));

export default function MiddleNavbarSection({
  calendarView,
  changeCalendarView,
  date,
  setDate,
  changeToNextMonth,
  changeToPreviousMonth,
  changeToNextYear,
  changeToPreviousYear,
}) {
  return (
    <Box
      id="navbar-middle-section"
      sx={{
        display: "flex",
        flex: "1 1 100px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ marginRight: "10.4px", borderRadius: 1 }}
          id="year-selection-wrapper"
        >
          {calendarView === MONTH ? (
            <MonthSelection
              date={date}
              setDate={setDate}
              changeToNextMonth={changeToNextMonth}
              changeToPreviousMonth={changeToPreviousMonth}
            />
          ) : (
            <YearSelection
              date={date}
              setDate={setDate}
              changeToPreviousYear={changeToPreviousYear}
              changeToNextYear={changeToNextYear}
            />
          )}
        </Box>
        <Box id="calendar-view-toggle-wrapper">
          <ColorButton
            variant="outlined"
            onClick={changeCalendarView}
            sx={{ fontWeight: "unset", width: "6.5rem" }}
          >
            <div style={{ color: "#6d6d6d" }}>
              {calendarView === YEAR ? (
                <span className="flex flex-row">
                  <p className="" style={{ fontSize: "0.8rem" }}>
                    Yearly
                  </p>
                  <img
                    src={switchIcon}
                    style={{ width: "1rem", marginLeft: "0.4rem" }}
                    alt={"switch-icon"}
                  />
                </span>
              ) : (
                <span className="flex flex-row">
                  <p className="" style={{ fontSize: "0.8rem" }}>
                    Monthly
                  </p>
                  <img
                    src={switchIcon}
                    style={{ width: "1rem", marginLeft: "0.4rem" }}
                    alt={"switch-icon"}
                  />
                </span>
              )}
            </div>
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
}
