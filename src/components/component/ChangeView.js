import { DATERANGEPAGE, HOMEPAGE } from "../../variables";
import homeLogo from "../../assets/home.svg";
import dateRangeLogo from "../../assets/dateRange.svg";
import Box from "@mui/material/Box";

export default function ChangeView({ setPage }) {
  return (
    <Box>
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
        marginRight: "0.6rem",
       }}
       onClick={()=> {setPage(HOMEPAGE)}}
       />
       <img
       src={dateRangeLogo}
       style={{
        width: "1.5rem",
        height: "1.5rem",
        border: "1px solid #c4c4c4",
        borderRadius: "4px",
        padding: "0.5rem",
        cursor: "pointer",
        verticalAlign: "middle",
        opacity: "0.78",
       }}
       onClick={()=> {setPage(DATERANGEPAGE)}}
        />
    </Box>
  );
}
