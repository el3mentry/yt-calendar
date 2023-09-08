import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import dayjs from "dayjs";

export default function YearSelection({
  date,
  setDate,
}) {
  function changeToPreviousYear() {
    setDate((prev) => {
      return prev.year() === 2006
        ? prev
        : prev.subtract(1, "y");
    });
  }

  function changeToNextYear() {
    setDate((prev) => {
      return prev.year() === dayjs().year()
        ? prev
        : prev.add(1, "y");
    });
  }

  return (
    <div>
      <Box
        sx={{
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          textAlign: "center",
          paddingRight: 1.3,
          paddingLeft: 1.3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "40px"
        }}
      >
        <IconButton onClick={changeToPreviousYear} edge={"start"}>
          <BiChevronLeft size={20} />
        </IconButton>
        <IconButton onClick={changeToNextYear} edge={"start"}>
          <BiChevronRight size={20} />
        </IconButton>
        <div style={{ color: "#6d6d6d" }}>{date.year()}</div>
      </Box>
    </div>
  );
}
