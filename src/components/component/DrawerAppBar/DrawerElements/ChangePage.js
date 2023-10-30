import { DATERANGEPAGE, HOMEPAGE } from "../../../../variables";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ButtonBase, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import HomeIcon from "../../../../assets/drawerHome.svg";
import ChangeView from "./ChangeView";
import DateRangeIcon from "../../../../assets/drawerDateRange.svg";

const ColorButton = styled(ButtonBase)(({ theme }) => ({
  fontFamily: '"Open Sans", "sans-serif"',
  color: "#000",
  backgroundColor: "#fff",
  height: "50px",
  minWidth: "100%",
  paddingLeft: "0.9rem",
  paddingRight: "0.9rem",
  marginLeft: "15px",
  display: "flex",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: grey[200],
  },
}));

export default function ChangePage({
  setPage,
  changeCalendarView,
  calendarView,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      <ColorButton
        variant="outlined"
        onClick={() => {
          setPage(HOMEPAGE);
        }}
      >
        <img src={HomeIcon} height={20} width={20} alt={"Home icon"} />
        <Typography
          variant="subtitle1"
          sx={{
            marginLeft: "2.2rem",
            fontFamily: "inter, sans-serif",
            fontWeight: "400",
            fontSize: "1rem",
          }}
        >
          HOME
        </Typography>
      </ColorButton>

      <ColorButton
        variant="outlined"
        onClick={() => {
          setPage(DATERANGEPAGE);
        }}
      >
        <img src={DateRangeIcon} alt="date range icon" height={20} width={20} />
        <Typography
          variant="subtitle1"
          sx={{
            marginLeft: "2.2rem",
            fontFamily: "inter, sans-serif",
            fontWeight: "400",
            fontSize: "1rem",
          }}
        >
          RANGE
        </Typography>
      </ColorButton>
      <ChangeView
        changeCalendarView={changeCalendarView}
        calendarView={calendarView}
      />
    </Box>
  );
}
