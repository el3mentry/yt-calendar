import { DATERANGEPAGE, HOMEPAGE } from "../../../../variables";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { ButtonBase, Typography } from "@mui/material";

const ColorButton = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  borderRadius: "25px",
  fontFamily: '"Open Sans", "sans-serif"',
  color: "white",
  backgroundColor: "#3365e7",
  height: "40px",
  minWidth: "40px",
  paddingLeft: "0.9rem",
  paddingRight: "0.9rem",
}));

export default function DrawerChangeView({ setPage }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <ColorButton
        variant="outlined"
        onClick={() => {
          setPage(HOMEPAGE);
        }}
      >
        <HomeIcon />
        <Typography variant="subtitle1" sx={{ marginLeft: "0.4rem" }}>
          Home
        </Typography>
      </ColorButton>
      <ColorButton
        variant="outlined"
        onClick={() => {
          setPage(DATERANGEPAGE);
        }}
      >
        <CalendarMonthIcon />
        <Typography variant="subtitle1" sx={{ marginLeft: "0.4rem" }}>
          Range
        </Typography>
      </ColorButton>
    </Box>
  );
}
