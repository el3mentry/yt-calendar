import { DATERANGEPAGE, HOMEPAGE } from "../../../variables";
import homeLogo from "../../../assets/home.svg";
import dateRangeLogo from "../../../assets/dateRange.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  borderColor: grey[400],
  borderRadius: "4px",
  fontFamily: '"Open Sans", "sans-serif"',
  "&:hover": {
    backgroundColor: grey[200],
    borderColor: grey[500],
  },
  height: "40px",
}));

export default function ChangeView({ setPage }) {
  return (
    <Box sx={{}}>
      <ColorButton variant="outlined">
        <img
          src={dateRangeLogo}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
            padding: "0",
          }}
          alt="Range-change-logo"
          onClick={() => {
            setPage(DATERANGEPAGE);
          }}
        />
      </ColorButton>
      <ColorButton variant="outlined">
        <img
          src={homeLogo}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setPage(HOMEPAGE);
          }}
          alt="Home-change-logo"
        />
      </ColorButton>
    </Box>
  );
}
