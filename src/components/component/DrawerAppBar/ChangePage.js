import { DATERANGEPAGE, HOMEPAGE } from "../../../variables";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function ChangePage({ setPage, direction = "row", style = {} }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ display: "flex", flexDirection: direction, ...style }}>
      <IconButton
        className={`${open ? "halfspin" : ""}`}
        sx={{ marginLeft: "3px" }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? true : undefined}
        aria-haspopup={true}
        onClick={handleToggle}
      >
        <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} color="info" />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper sx={{ opacity: 0, marginLeft: "3px", boxShadow: "none" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{ marginBottom: "8px" }}
                    onClick={() => {
                      setPage(HOMEPAGE);
                    }}
                  >
                    <HomeOutlinedIcon sx={{ color: "rgba(50, 50, 50 ,0.75)" }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => {
                      setPage(DATERANGEPAGE);
                    }}
                  >
                    <EditCalendarOutlinedIcon sx={{ color: "rgba(50, 50, 50 ,0.75)" }} />
                  </IconButton>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
