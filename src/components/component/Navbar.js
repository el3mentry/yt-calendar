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
import switchIcon from "../../assets/switch-icon.svg";
import TotalVids from "./TotalVids";

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
  totalVideoCount = 0,
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
            // width: "16rem",
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
          <Box
            id="channel-title"
            sx={{
              display: "flex",
              flexGrow: 1,
              marginLeft: "7px",
              marginRight: "5px",
            }}
          >
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

      <Box
        id="navbar-right-section"
        sx={{
          display: "flex",
          width: "33.3333%",
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
            padding: "0 5px 0 5px",
            width: "14rem",
            color: "#6d6d6d",
            marginRight: "0.65rem",
          }}
        >
          <TotalVids totalVideoCount={totalVideoCount} />
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {startDate !== null && endDate !== null
              ? startDate.format("Do MMM 'YY") +
                " - " +
                endDate.format("Do MMM 'YY")
              : "Do MMM' YY - Do MMM' YY"}
          </p>
        </Box>

        <ChangeView setPage={setPage} />
      </Box>
    </Box>
  );
}
