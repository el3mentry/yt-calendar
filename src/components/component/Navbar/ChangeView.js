import { DATERANGEPAGE, HOMEPAGE } from "../../../variables";
import homeLogo from "../../../assets/home.svg";
import dateRangeLogo from "../../../assets/dateRange.svg";
import Box from "@mui/material/Box";

export default function ChangeView({ setPage }) {
  return (
    <Box sx={{ marginRight: "1vw" }}>
      <img
        src={dateRangeLogo}
        style={{
          width: "1.5rem",
          height: "1.5rem",
          border: "1px solid #c4c4c4",
          borderRadius: "4px",
          padding: "0.5rem",
          marginRight: "0.6rem",
          cursor: "pointer",
          verticalAlign: "middle",
        }}
        alt="Range-change-logo"
        onClick={() => {
          setPage(DATERANGEPAGE);
        }}
      />
      <img
        src={homeLogo}
        style={{
          width: "1.5rem",
          height: "1.5rem",
          border: "1px solid #c4c4c4",
          borderRadius: "4px",
          padding: "0.5rem",
          cursor: "pointer",
          verticalAlign: "middle",
        }}
        onClick={() => {
          setPage(HOMEPAGE);
        }}
        alt="Home-change-logo"
      />
    </Box>
  );
}
