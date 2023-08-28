import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import dayjs from 'dayjs';

export default function YearSelection({ currentYear, setCurrentYear }) {
  function changeToPreviousYear() {
    setCurrentYear((prev) => {
      return prev === 2006 ? prev : prev - 1;
    });
  }

  function changeToNextYear() {
    setCurrentYear((prev) => {
      return prev === dayjs().year() ? prev : prev + 1;
    });
  }

  return (
    <div>
      <Box
        sx={{
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: '7px',
          textAlign: "center",
          paddingRight: 1.3,
          paddingLeft: 1.3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <IconButton onClick={changeToPreviousYear} edge={'start'}>
          <BiChevronLeft size={20} />
        </IconButton>
        <IconButton onClick={changeToNextYear} edge={'start'}>
          <BiChevronRight size={20} />
        </IconButton>
        <div style={{color: "#6d6d6d"}}>{currentYear}</div>
      </Box>
    </div>
  );
}
