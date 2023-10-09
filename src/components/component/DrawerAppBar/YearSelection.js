import Box from "@mui/material/Box";
import arrowLeft from "../../../assets/arrow-left.svg";
import arrowRight from "../../../assets/arrow-right.svg";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const ColorButton = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  borderColor: grey[300],
  fontFamily: '"Open Sans", "sans-serif"',
  "&:hover": {
    backgroundColor: grey[200],
    borderColor: grey[300],
  },
  height: "38px",
  width: "15px",
}));

export default function YearSelection({
  date,
  changeToPreviousYear,
  changeToNextYear,
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingLeft: 1.3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "40px",
      }}
    >
      <div
        className="flex flex-row  align-items-center"
        style={{
          color: "#6d6d6d",
          border: "1px solid #c4c4c4",
          borderRadius: "4px",
          height: "40px",
          width: "6rem",
          fontSize: "0.9rem",
          justifyContent: "space-between",
        }}
      >
        <ColorButton
          onClick={changeToPreviousYear}
          style={{
            borderRightWidth: "1px",
            borderRightStyle: "solid",
            borderBottomLeftRadius: "4px",
            borderTopLeftRadius: "4px",
          }}
        >
          <img
            className="arrow-logo-icon"
            src={arrowLeft}
            alt="arrow-logo-icon-left"
          />
        </ColorButton>

        {date.year()}

        <ColorButton
          onClick={changeToNextYear}
          style={{
            borderLeftWidth: "1px",
            borderLeftStyle: "solid",
            borderBottomRightRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        >
          <img
            className="arrow-logo-icon"
            src={arrowRight}
            alt="arrow-logo-icon-right"
          />
        </ColorButton>
      </div>
    </Box>
  );
}
