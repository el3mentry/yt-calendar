import YearSelection from "../YearSelection";
import { MONTH, YEAR } from "../../../variables";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import MonthSelection from "../MonthSelection";
import React from "react";
import switchIcon from "../../../assets/switch-icon.svg";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  padding: "auto",
  borderColor: grey[400],
  borderRadius: "4px",
  height: "42px",
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
}) {
  return (
    <Box
      id="navbar-middle-section"
      sx={{
        display: "flex",
        width: "33.3333%",
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
          sx={{ marginRight: "0.6rem", borderRadius: 1 }}
          id="year-selection-wrapper"
        >
          {calendarView === MONTH ? (
            <MonthSelection date={date} setDate={setDate} />
          ) : (
            <YearSelection date={date} setDate={setDate} />
          )}
        </Box>
        <Box id="calendar-view-toggle-wrapper">
          <ColorButton
            variant="outlined"
            onClick={changeCalendarView}
            sx={{ fontWeight: "unset" }}
          >
            <div style={{ color: "#6d6d6d" }}>
              {calendarView === YEAR ? (
                <span className="flex flex-row">
                  <p className="" style={{ fontSize: "16px" }}>
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
                  <p className="" style={{ fontSize: "16px" }}>
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
