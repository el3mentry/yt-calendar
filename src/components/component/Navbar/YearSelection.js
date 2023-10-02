import Box from "@mui/material/Box";
import dayjs from "dayjs";
import arrowLogo from "../../../assets/arrow.svg";

export default function YearSelection({ date, setDate }) {
  function changeToPreviousYear() {
    setDate((prev) => {
      return prev.year() === 2006 ? prev : prev.subtract(1, "y");
    });
  }

  function changeToNextYear() {
    setDate((prev) => {
      return prev.year() === dayjs().year() ? prev : prev.add(1, "y");
    });
  }

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
          <img
            className="arrow-logo-icon"
            src={arrowLogo}
            style={{
              transform: "rotate(90deg)",
            }}
            onClick={changeToPreviousYear}
            alt="arrow-logo-icon-left"
          />
          <img
            className="arrow-logo-icon"
            src={arrowLogo}
            style={{
              transform: "rotate(270deg)",
            }}
            onClick={changeToNextYear}
            alt="arrow-logo-icon-right"
          />
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
