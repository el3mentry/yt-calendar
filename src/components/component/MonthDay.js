import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Media from "./Media";
// import LayeredTemplateView from './LayeredTemplateView';
import StackedTemplateView from "./StackedTemplateView";

const ITEM_HEIGHT = 48;

export default function MonthDay({ dayValue, className, options = [] }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ID = "button-div";

  const handleClick = (event) => {
    if (event.target.id === ID) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "uploads-popover" : undefined;
  return (
    <div
      role="button"
      className={`${className} p-relative`}
      style={{ cursor: options.length > 0 ? "pointer" : "default" }}
      id={ID}
      onClick={handleClick}
    >
      <div
        className="p-relative"
        style={{ display: "flex", flexDirection: "column" }}
        aria-describedby={id}
      >
        <div
          className="p-absolute centered-text w-100 flex flex-row justify-content-center"
          style={{ top: "-17px" }}
        >
          <div
            className="p-absolute"
            style={{
              width: "30px",
              zIndex: 2,
              color: "black",
              // fontSize: "11px",
              fontFamily: "inter, monospace",
              fontWeight: 500,
            }}
          >
            {dayValue.toString().length < 2
              ? "0" + dayValue.toString()
              : dayValue.toString()}
          </div>
          <div
            className="p-absolute"
            style={{
              // backgroundColor: "#4285f4",
              backgroundColor: "white",
              color: "white",
              height: "21px",
              width: "21px",
              zIndex: 1,
              top: "-4px",
              borderRadius: "50%",
            }}
          ></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <StackedTemplateView
            imageLinks={options.map((element) => element.thumbnailSource.url)}
          />
        </div>
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
