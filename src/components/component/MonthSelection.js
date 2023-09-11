import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { getMonthName } from "./YearlyCalendar/Utils";
import dayjs from "dayjs";
import React from "react";

export default function MonthSelection({ date, setDate }) {
  React.useEffect(() => {
    if (date.month() <= 4 && date.year() === 2006)
      setDate(() => dayjs("2006-05-01"));
  });

  function changeToPreviousMonth() {
    setDate((prev) => {
      return prev.year() === 2006 && prev.month() === 4
        ? prev
        : prev.subtract(1, "M");
    });
  }

  function changeToNextMonth() {
    setDate((prev) => {
      return prev.year() === dayjs().year() && prev.month() === dayjs().month()
        ? prev
        : prev.add(1, "M");
    });
  }

  return (
    <div>
      <Box
        sx={{
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          textAlign: "center",
          paddingRight: 1.3,
          paddingLeft: 1.3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "40px",
        }}
      >
        <IconButton onClick={changeToPreviousMonth} edge={"start"}>
          <BiChevronLeft size={20} />
        </IconButton>
        <IconButton onClick={changeToNextMonth} edge={"start"}>
          <BiChevronRight size={20} />
        </IconButton>
        <div style={{ color: "#6d6d6d", width: "80px" }}>
          {getMonthName(date.month() + 1).substring(0, 3)} {date.year()}
        </div>
      </Box>
    </div>
  );
}
