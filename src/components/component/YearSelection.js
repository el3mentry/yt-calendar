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
          borderRadius: 1,
          textAlign: "center",
          paddingRight: 1,
        }}
      >
        <IconButton onClick={changeToPreviousYear}>
          <BiChevronLeft size={20} />
        </IconButton>
        <IconButton onClick={changeToNextYear}>
          <BiChevronRight size={20} />
        </IconButton>
        <strong>{currentYear}</strong>
      </Box>
    </div>
  );
}
