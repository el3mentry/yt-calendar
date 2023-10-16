import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";
import { YEAR } from "../../../../variables";
import SwitchIcon from "../../../../assets/switch-icon.svg";

export default function ChangeView({ changeCalendarView, calendarView }) {
  const ColorButton = styled(ButtonBase)(() => ({
    borderRadius: "25px",
    fontFamily: '"Open Sans", "sans-serif"',
    color: "white",
    backgroundColor: "#3365E7",
    height: "30px",
    minWidth: "3rem",
    paddingLeft: "0.9rem",
    paddingRight: "0.9rem",
  }));

  return (
    <Box
      id="calendar-view-toggle-wrapper"
      sx={{
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        height: "50px",
      }}
      onClick={changeCalendarView}
    >
      <ColorButton
        variant="outlined"
        sx={{
          fontWeight: "unset",
          backgroundColor: "white",
          color: "black",
        }}
        onClick={changeCalendarView}
      >
        <img height={30} width={30} src={SwitchIcon} alt="switch-icon" />
      </ColorButton>

      <ColorButton
        variant="outlined"
        onClick={changeCalendarView}
        sx={{ fontWeight: "unset" }}
      >
        <Box sx={{ width: "100%" }}>
          {calendarView === YEAR ? (
            <Box className="flex flex-row">
              <Typography
                variant="subtitle1"
                sx={{
                  margin: "auto",
                  fontWeight: "400",
                  fontFamily: '"inter", "sans-serif"',
                }}
              >
                YEARLY
              </Typography>
            </Box>
          ) : (
            <Box className="flex flex-row">
              <Typography
                variant="subtitle1"
                sx={{
                  margin: "auto",
                  fontWeight: "400",
                  fontFamily: '"inter", "sans-serif"',
                  marginBottom: "0.1rem",
                }}
              >
                MONTHLY
              </Typography>
            </Box>
          )}
        </Box>
      </ColorButton>
     
    </Box>
  );
}
