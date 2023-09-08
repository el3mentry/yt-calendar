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
  borderRadius: "7px",
  height: "38px",
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
          width: "30%",
          justifyContent: "start",
          ml: "2vw",
          alignItems: "center",
        }}
      >
        <Box id="yt-cal-logo" sx={{ mt: "6px" }}>
          <Logo />
        </Box>

        <Box
          id="navbar-left-subsection"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Box
            sx={{ marginLeft: "5%", marginRight: "5%", borderRadius: 1 }}
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
        </Box>
      </Box>

      <Box
        id="navbar-right-section"
        sx={{
          display: "flex",
          width: "70%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: "5%",
          alignItems: "center",
        }}
      >
        <Box id="calendar-view-toggle-wrapper">
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
  );
}
