import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";
import { YEAR } from "../../../../variables";
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

export default function ChangeView({ changeCalendarView, calendarView }) {
  const ColorButton = styled(ButtonBase)(() => ({
    borderRadius: "25px",
    fontFamily: '"Open Sans", "sans-serif"',
    color: "white",
    backgroundColor: "#3365E7",
    height: "40px",
    minWidth: "90%",
    paddingLeft: "0.9rem",
    paddingRight: "0.9rem",
  }));

  return (
    <Box id="calendar-view-toggle-wrapper">
      <ColorButton
        variant="outlined"
        onClick={changeCalendarView}
        sx={{ fontWeight: "unset", width: "6.5rem" }}
      >
        <CachedOutlinedIcon />
        <Box sx={{ width: "100%" }}>
          {calendarView === YEAR ? (
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
