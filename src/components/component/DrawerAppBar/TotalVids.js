import summation from "../../../assets/summation.svg";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box } from "@mui/material";

export default function TotalVids({ totalVideoCount = 0 }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: "14px",
          border: "1px solid #6cabdd",
          fontFamily: '"inter" , "Open Sans", "sans-serif"',
          padding: "3px",
          fontSize: "0.9rem",
          cursor: "default",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: "5px"
        }}
      >
        <Box
          sx={{
            backgroundColor: "#6cabdd",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={summation}
            alt={"Total Videos"}
            style={{
              width: "10px",
              height: "10px",
            }}
          />
        </Box>
        <p
          style={{
            margin: "auto",
            color: "#6cabdd",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          {totalVideoCount}
        </p>
      </Box>
    </>
  );
}
