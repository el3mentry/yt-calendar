import Logo from "../component/Logo";
import YearSelection from "./YearSelection";
import RecentSearches from "./RecentSearches";
import Button from "@mui/material/Button";
import { MONTH, YEAR } from "../../variables";

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
    <div
      style={{
        height: "60px",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        padding: "0.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "start",
          marginLeft: "5%",
          alignItems: "center",
        }}
      >
        <div>
          <Logo />
        </div>
        <div style={{ marginLeft: "5%" }}>
          <YearSelection
            currentYear={currentYear}
            setCurrentYear={setCurrentYear}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "end",
          marginRight: "5%",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "3%" }}>
          <RecentSearches />
        </div>
        <div>
          <Button
            variant="contained"
            sx={{ height: 40 }}
            onClick={changeCalendarView}
          >
            {calendarView === YEAR ? "Year" : "Month"}
          </Button>
        </div>
      </div>
    </div>
  );
}
