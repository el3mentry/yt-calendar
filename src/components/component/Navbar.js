import Logo from "../component/Logo";
import YearSelection from "./YearSelection";
import RecentSearches from "./RecentSearches";
import { MONTH, YEAR } from "../../variables";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  padding: "auto",
  borderColor: grey[400],
  fontFamily: '"Open Sans", "sans-serif"',
  "&:hover": {
    backgroundColor: grey[200],
    borderColor: grey[500],
  },
}));

export default function Navbar({
  currentYear,
  setCurrentYear,
  calendarView,
  setCalendarView,
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
        p: "0.4rem",
      }}
    >
      <Box
        id="navbar-left-section"
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "start",
          ml: "2%",
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
            <YearSelection
              currentYear={currentYear}
              setCurrentYear={setCurrentYear}
            />
          </Box>
          <Box id="calendar-view-toggle-wrapper">
            <ColorButton variant="outlined" onClick={changeCalendarView}>
              {calendarView === YEAR ? "Year" : "Month"}
            </ColorButton>
          </Box>
        </Box>
      </Box>

      <Box
        id="navbar-right-section"
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "end",
          marginRight: "5%",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: "3%" }} id="recent-searches-wrapper">
          <RecentSearches />
        </Box>
      </Box>
    </Box>
  );
}
