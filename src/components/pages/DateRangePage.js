import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DateRange } from "react-date-range";
import { useState } from "react";
import { CALENDARPAGE } from "../../variables";
import { Button } from "@mui/material";

export default function DateRangePage({ setPage }) {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  function handleSelect(ranges) {
    setSelectionRange(ranges.selection);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        maxDate={new Date()}
        minDate={new Date("2006-01-01")}
        months={2}
        direction="horizontal"
        editableDateInputs="true"
        dateDisplayFormat="dd-MMM-yyyy"
        preventSnapRefocus={true}
        calendarFocus="backwards"
      />
      <br />
      <Button onClick={() => setPage(CALENDARPAGE)} variant="outlined">
        View Calendar
      </Button>
    </div>
  );
}
