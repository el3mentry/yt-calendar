import ChangeView from "./ChangeView";
import Box from "@mui/material/Box";
import React from "react";
import TotalVids from "./TotalVids";

export default function RightNavbarSection({
  startDate,
  endDate,
  setPage,
  totalVideoCount,
}) {
  return (
    <Box
      id="navbar-right-section"
      sx={{
        display: "flex",
        width: "33.3333%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: "40px",
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          padding: "0 5px 0 5px",
          minWidth: "12rem",
          color: "#6d6d6d",
          marginRight: "0.65rem",
        }}
      >
        <TotalVids totalVideoCount={totalVideoCount} />
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {startDate !== null && endDate !== null
            ? startDate.format("Do MMM 'YY") +
              " - " +
              endDate.format("Do MMM 'YY")
            : "Do MMM' YY - Do MMM' YY"}
        </p>
      </Box>

      <ChangeView setPage={setPage} />
    </Box>
  );
}
