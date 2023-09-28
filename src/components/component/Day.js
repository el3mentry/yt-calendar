import * as React from "react";
import Popover from "@mui/material/Popover";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Media from "./Media";

const ITEM_HEIGHT = 48;

export default function Day({ dayValue, className, options = [] }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "uploads-popover" : undefined;
  return (
    <div className={`${className}`}>
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          border: options.length >= 2 ? "1px solid rgb(79, 96, 184)" : "white",
          borderRadius: "50%",
          height: options.length >= 2 ? "22px" : "25px",
          width: options.length >= 2 ? "22px" : "25px",
        }}
        aria-describedby={id}
      >
        <p
          style={{
            backgroundColor:
              options.length >= 1 ? "rgba(100,150,255,0.65)" : "white",
            borderRadius: "50%",
            margin: "2px",
            paddingTop: options.length >= 2 ? "0.8px" : "2.5px",
            height: "25px",
            color: "#505050",
          }}
        >
          {dayValue}
        </p>
      </div>
      {options.length > 0 ? (
        <div>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "30ch",
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option.key}
                sx={{ padding: 0 }}
                onClick={handleClose}
              >
                <Media
                  thumbnail={option.thumbnailSource.url}
                  title={option.videoTitle}
                  videoLink={option.videoLink}
                  key={option.key}
                />
              </MenuItem>
            ))}
          </Menu>
        </div>
      ) : null}
    </div>
  );
}
