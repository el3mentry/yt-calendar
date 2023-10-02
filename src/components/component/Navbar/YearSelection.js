import Box from "@mui/material/Box";
import arrowLogo from "../../../assets/arrow.svg";
import IconButton from "@mui/material/IconButton";

export default function YearSelection({
  date,
  changeToPreviousYear,
  changeToNextYear,
}) {
  return (
    <div>
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
        <div className="flex" style={{ marginRight: "24px" }}>
          <IconButton onClick={changeToPreviousYear}>
            <img
              className="arrow-logo-icon"
              src={arrowLogo}
              style={{
                transform: "rotate(90deg)",
              }}
              alt="arrow-logo-icon-left"
            />
          </IconButton>
          <IconButton onClick={changeToNextYear}>
            <img
              className="arrow-logo-icon"
              src={arrowLogo}
              style={{
                transform: "rotate(270deg)",
              }}
              alt="arrow-logo-icon-right"
            />
          </IconButton>
        </div>
        <div
          className="flex flex-row justify-content-center align-items-center"
          style={{
            color: "#6d6d6d",
            border: "1px solid #c4c4c4",
            borderRadius: "4px",
            height: "40px",
            padding: "0 10.4px",
            width: "5rem",
          }}
        >
          {date.year()}
        </div>
      </Box>
    </div>
  );
}
