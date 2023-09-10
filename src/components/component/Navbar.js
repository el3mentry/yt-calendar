import Logo from "../component/Logo";
import YearSelection from "./YearSelection";
import RecentSearches from "./RecentSearches";
import { MONTH, YEAR } from "../../variables";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import MonthSelection from "./MonthSelection";

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
  setDate
}) {
  function changeCalendarView() {
    if (calendarView === MONTH) setCalendarView(YEAR);
    else setCalendarView(MONTH);
  }
  return (
    <Box
      id="navbar-box"
      sx={{
        height: "70px",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        border: 1,
        borderTop: "none",
        borderBottom: "line",
        borderColor: "#c4c4c4",
      }}
    >
      <Box
        id="navbar-left-section"
        sx={{
          display: "flex",
          width: "10%",
          justifyContent: "space-between",
          ml: "2vw",
          alignItems: "center",
        }}
      >
        <Box id="yt-cal-logo" sx={{ mt: "6px" }}>
          <Logo />
        </Box>
      </Box>

      <Box
        id="navbar-right-section"
        sx={{
          display: "flex",
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "2vw",
          alignItems: "center",
        }}
      >
        <Box sx={{
          display: "flex", alignItems: "center", marginLeft: "15%", border: 1, height: "40px",
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          padding: "0 5px 0 5px"
        }}>
          <Box id="channel-logo" sx={{ height: "30px", width: "30px", borderRadius: "50%", backgroundColor: "red" }}>
          </Box>
          <Box id="channel-title" sx={{ marginLeft: "10px", display: "inline" }}>
            "Mr Feast"
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: "1vw",
          alignItems: "center"
        }}>
          <Box
            sx={{ marginRight: "1vw", borderRadius: 1 }}
            id="year-selection-wrapper"
          >
            {calendarView === MONTH ? (
              <MonthSelection
                date={date}
                setDate={setDate}
              />
            ) : (
              <YearSelection
                date={date}
                setDate={setDate}
              />
            )}
          </Box>
          <Box id="calendar-view-toggle-wrapper" sx={{ marginRight: "4vw" }}>
            <ColorButton variant="outlined" onClick={changeCalendarView}>
              <div style={{ color: "#6d6d6d" }}>
                {calendarView === YEAR ? "Yearly" : "Monthly"}
              </div>
            </ColorButton>
          </Box>
          <Box sx={{ marginRight: "3%" }} id="recent-searches-wrapper">
            <RecentSearches />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
