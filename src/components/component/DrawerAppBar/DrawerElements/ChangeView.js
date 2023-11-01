import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";
import { YEAR } from "../../../../variables";
import SwitchIcon from "../../../../assets/switch-icon-drawer.svg";

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
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        height: "50px",
        cursor: "pointer"
      }}
      onClick={changeCalendarView}
    >
      <ColorButton
        variant="outlined"
        sx={{
          fontWeight: "unset",
          backgroundColor: "white",
          color: "black",
          marginLeft: "15px",
        }}
        onClick={changeCalendarView}
      >
        <img height={20} width={20} src={SwitchIcon} alt="switch-icon" />
      </ColorButton>

      <ColorButton
        variant="outlined"
        onClick={changeCalendarView}
        sx={{ fontWeight: "unset", marginLeft: "7px" }}
      >
        <Box sx={{ width: "100%" }}>
          {calendarView === YEAR ? (
            <Box className="flex flex-row justify-content-center">
              <Typography
                variant="subtitle1"
                sx={{
                  // margin: "auto",
                  fontWeight: "400",
                  fontFamily: '"inter", "sans-serif"',
                  alignSelf: "center"
                }}
              >
                YEARLY
              </Typography>
            </Box>
          ) : (
            <Box className="flex flex-row justify-content-center">
              <Typography
                variant="subtitle1"
                sx={{
                  margin: "auto",
                  fontWeight: "400",
                  fontFamily: '"inter", "sans-serif"',
                  alignSelf: "center"
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
