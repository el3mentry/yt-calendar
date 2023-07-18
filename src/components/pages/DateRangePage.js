import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";

export default function DateRangePage({ setPage }) {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  function handleSelect(ranges) {
    console.log(ranges);
    setSelectionRange(ranges.selection);
  }

  return <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />;
}
