import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { getMonthName } from "./YearlyCalendar/Utils";

export default function MonthSelection({ date, setDate }) {
  function changeToPreviousMonth() {
    setDate((prev) => {
      return prev.subtract(1, "M");
    });
  }

  function changeToNextMonth() {
    setDate((prev) => {
      return prev.add(1, "M");
    });
  }

  return (
    <div>
      <Box
        sx={{
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "7px",
          textAlign: "center",
          paddingRight: 1.3,
          paddingLeft: 1.3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton onClick={changeToPreviousMonth} edge={"start"}>
          <BiChevronLeft size={20} />
        </IconButton>
        <IconButton onClick={changeToNextMonth} edge={"start"}>
          <BiChevronRight size={20} />
        </IconButton>
        <div style={{ color: "#6d6d6d" }}>
          {getMonthName(date.month() + 1)} {date.year()}
        </div>
      </Box>
    </div>
  );
}
