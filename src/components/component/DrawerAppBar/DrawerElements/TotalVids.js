import summation from "../../../../assets/summation.svg";
import { Box } from "@mui/material";

export default function TotalVids({ totalVideoCount = 0 }) {
  return (
    <>
      <Box
        aria-label="delete"
        size="small"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "14px",
            border: "1px solid #6cabdd",
            fontFamily: '"inter" , "Open Sans", "sans-serif"',
            height: "40px",
            minWidth: "50%",
            fontSize: "0.9rem",
            cursor: "default",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#6cabdd",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={summation}
              alt={"Total Videos"}
              style={{
                width: "15px",
                height: "15px",
              }}
            />
          </Box>
          Total: {totalVideoCount}
        </Box>
      </Box>
    </>
  );
}
