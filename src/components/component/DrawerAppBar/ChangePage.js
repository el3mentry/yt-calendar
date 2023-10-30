import { DATERANGEPAGE, HOMEPAGE } from "../../../variables";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

export default function ChangePage({ setPage, direction = "row", style = {} }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: direction, ...style }}>
      <IconButton
        id="fade-button"
        className={`${open ? "halfspin" : ""}`}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ marginLeft: "3px" }}
      >
        <KeyboardArrowDownIcon color="info" />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "3px",
          }}
        >
          <IconButton
            size="small"
            sx={{ marginBottom: "8px" }}
            onClick={() => {
              setPage(HOMEPAGE);
            }}
          >
            <HomeIcon sx={{ color: "#3365e7" }} />
          </IconButton>

          <IconButton
            size="small"
            onClick={() => {
              setPage(DATERANGEPAGE);
            }}
          >
            <EditCalendarIcon sx={{ color: "#3365e7" }} />
          </IconButton>
        </Box>
      </Menu>
    </Box>
  );
}
