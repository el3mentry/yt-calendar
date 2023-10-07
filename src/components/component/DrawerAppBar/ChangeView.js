import { DATERANGEPAGE, HOMEPAGE } from "../../../variables";
import homeLogo from "../../../assets/home.svg";
import dateRangeLogo from "../../../assets/dateRange.svg";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const ColorButton = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  borderColor: grey[400],
  borderRadius: "4px",
  fontFamily: '"Open Sans", "sans-serif"',
  "&:hover": {
    backgroundColor: grey[200],
    borderColor: grey[500],
  },
  borderWidth: "1px",
  borderStyle: "solid",
  height: "40px",
  width: "40px",
}));

export default function ChangeView({ setPage, direction = "row" }) {
  return (
    <Box sx={{ display: "flex", flexDirection: direction }}>
      <ColorButton
        variant="outlined"
        sx={{ mr: "0.65rem" }}
        onClick={() => {
          setPage(DATERANGEPAGE);
        }}
      >
        <img
          src={dateRangeLogo}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
          alt="Range-change-logo"
        />
      </ColorButton>
      <ColorButton
        variant="outlined"
        onClick={() => {
          setPage(HOMEPAGE);
        }}
      >
        <img
          src={homeLogo}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
          alt="Home-change-logo"
        />
      </ColorButton>
    </Box>
  );
}
