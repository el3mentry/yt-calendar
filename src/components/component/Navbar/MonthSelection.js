import Box from "@mui/material/Box";
import { getMonthName } from "../Calendar/Common/Utils";
import dayjs from "dayjs";
import React from "react";
import arrowLogo from "../../../assets/arrow.svg";
import IconButton from "@mui/material/IconButton";

export default function MonthSelection({
  date,
  setDate,
  changeToPreviousMonth,
  changeToNextMonth,
}) {
  React.useEffect(() => {
    if (date.month() <= 4 && date.year() === 2006)
      setDate(() => dayjs("2006-05-01"));
  });

  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          paddingLeft: 1.3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "40px",
        }}
      >
        <div style={{ marginRight: "24px" }}>
          <IconButton onClick={changeToPreviousMonth}>
            <img
              alt="arrow-logo-icon-left"
              className="arrow-logo-icon"
              src={arrowLogo}
              style={{
                transform: "rotate(90deg)",
              }}
            />
          </IconButton>
          <IconButton onClick={changeToNextMonth}>
            <img
              alt="arrow-logo-icon-right"
              className="arrow-logo-icon"
              src={arrowLogo}
              style={{
                transform: "rotate(270deg)",
              }}
            />
          </IconButton>
        </div>
        <div
          className="flex flex-row justify-content-center align-items-center"
          style={{
            color: "#6d6d6d",
            border: "1px solid #c4c4c4",
            borderRadius: "4px",
            height: "40px",
            padding: "0 10.4px",
            width: "5rem",
          }}
        >
          {getMonthName(date.month() + 1).substring(0, 3)} {date.year()}
        </div>
      </Box>
    </div>
  );
}
