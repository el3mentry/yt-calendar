import * as React from "react";
import Popover from "@mui/material/Popover";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Media from "./Media";
import LayeredTemplateView from "./LayeredTemplateView";

const ITEM_HEIGHT = 48;

export default function MonthDay({ dayValue, className, options = [] }) {
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
    <div className={`${className} p-relative`}>
      <div
        className="p-relative"
        onClick={handleClick}
        style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
        aria-describedby={id}
      >
        <div
          className="p-absolute centered-text w-100 flex flex-row justify-content-center"
          style={{ top: "-18px" }}
        >
          <div className="p-absolute circle">
            {dayValue.toString().length < 2
              ? "0" + dayValue.toString()
              : dayValue.toString()}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <LayeredTemplateView
            imageLinks={options.map((element) => element.thumbnailSource.url)}
          />
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
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
              <MenuItem key={option.key} onClick={handleClose}>
                <Media
                  thumbnail={option.thumbnailSource.url}
                  title={option.videoTitle}
                  key={option.key}
                />
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Popover>
    </div>
  );
}
