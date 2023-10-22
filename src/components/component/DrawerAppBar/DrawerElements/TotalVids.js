import summation from "../../../../assets/summation.svg";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const ColorButton = styled(ButtonBase)(() => ({
  borderRadius: "25px",
  fontFamily: '"inter" , "Open Sans", "sans-serif"',
  backgroundColor: "#6cabdd",
  height: "30px",
  minWidth: "30%",
  color: "white",
  paddingLeft: "0.9rem",
  paddingRight: "0.9rem",
  fontSize: "0.9rem",
  cursor: "default",
}));

export default function TotalVids({ totalVideoCount = 0 }) {
  return (
    <>
      <Box
        aria-label="delete"
        size="small"
        sx={{
          marginLeft: "0.2rem",
          marginRight: "0.2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: "#6cabdd",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem"
          }}
        >
          <img
            src={summation}
            alt={"Total Videos"}
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </Box>
        <ColorButton>Total: {totalVideoCount}</ColorButton>
      </Box>
    </>
  );
}
