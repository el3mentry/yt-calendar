import Logo from "../component/Logo";
import YearSelection from "./YearSelection";
import RecentSearches from "./RecentSearches";
import Button from "@mui/material/Button";
import { MONTH, YEAR } from "../../variables";
import Box from "@mui/material/Box";

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
          ml: "5%",
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
            sx={{ marginLeft: "5%", bgcolor: "grey.100", marginRight: "5%" }}
            id="year-selection-wrapper"
          >
            <YearSelection
              currentYear={currentYear}
              setCurrentYear={setCurrentYear}
            />
          </Box>
          <Box id="calendar-view-toggle-wrapper">
            <Button
              variant="contained"
              sx={{ height: 39 }}
              onClick={changeCalendarView}
            >
              {calendarView === YEAR ? "Year" : "Month"}
            </Button>
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
