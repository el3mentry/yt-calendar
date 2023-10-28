import { DATERANGEPAGE, HOMEPAGE } from "../../../variables";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import IconButton from '@mui/material/IconButton';

export default function ChangePage({ setPage, direction = "row", style = {} }) {
  return (
    <Box sx={{ display: "flex", flexDirection: direction, ...style }}>
      <IconButton size="medium" onClick={() => {
          setPage(HOMEPAGE);
        }}>
        <HomeIcon sx={{width: "2rem", height: "2rem"}}/>
      </IconButton>

      <IconButton size="medium" onClick={() => {
          setPage(DATERANGEPAGE);
        }}>
        <EditCalendarIcon />
      </IconButton>
    </Box>
  );
}
