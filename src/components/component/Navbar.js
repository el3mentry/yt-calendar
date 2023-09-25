import Logo from "../component/Logo";
import YearSelection from "./YearSelection";
import ChangeView from "./ChangeView";
import { MONTH, YEAR } from "../../variables";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import MonthSelection from "./MonthSelection";
import React from "react";

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

export default function Navbar({
  calendarView,
  setCalendarView,
  date,
  setDate,
  setPage,
  startDate = null,
  endDate = null,
  channelName = "ChannelName",
  channelThumbnail = "",
}) {
  function changeCalendarView() {
    if (calendarView === MONTH) setCalendarView(YEAR);
    else setCalendarView(MONTH);
  }
  return (
    <Box
      id="navbar-box"
      sx={{
        height: "60px",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        flexGrow: 1,
        zIndex: "99",
        position: "relative",
      }}
    >
      <Box
        id="navbar-left-section"
        sx={{
          display: "flex",
          width: "33.333%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box id="yt-cal-logo" sx={{ mt: "6px", ml: "2vw" }}>
          <Logo />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "40px",
            border: 1,
            borderColor: "#c4c4c4",
            borderRadius: "4px",
            padding: "0 5px 0 5px",
            width: "12rem",
            marginLeft: "50px",
            marginRight: "auto",
          }}
        >
          <Box
            id="channel-logo"
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              backgroundImage: `url(${channelThumbnail})`,
              backgroundSize: "contain",
            }}
          ></Box>
          <Box id="channel-title" sx={{ display: "flex", flexGrow: 1 }}>
            <Box
              title={channelName}
              sx={{ flexGrow: 1, textAlign: "center", color: "#0f0f0f" }}
            >
              {channelName.length > 18
                ? channelName.substring(0, 15) + "..."
                : channelName}
            </Box>
          </Box>
        </Box>
      </Box>

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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            border: 1,
            borderColor: "#c4c4c4",
            borderRadius: "4px",
            padding: "0 5px 0 5px",
            width: "14rem",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#6d6d6d",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {startDate !== null && endDate !== null
              ? startDate.format("Do MMM 'YY") +
                " - " +
                endDate.format("Do MMM 'YY")
              : "Do MMM' YY - Do MMM' YY"}
          </p>
        </Box>
      </Box>

      <Box
        id="navbar-right-section"
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
            justifyContent: "flex-end",
            marginRight: "1vw",
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
          <Box id="calendar-view-toggle-wrapper" sx={{ marginRight: "4vw" }}>
            <ColorButton variant="outlined" onClick={changeCalendarView}>
              <div style={{ color: "#6d6d6d" }}>
                {calendarView === YEAR ? "Yearly" : "Monthly"}
              </div>
            </ColorButton>
          </Box>
          <Box
            sx={{ marginRight: "3%", marginLeft: "4%" }}
            id="recent-searches-wrapper"
          >
            <ChangeView setPage={setPage} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
