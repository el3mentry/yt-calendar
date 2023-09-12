import * as React from "react";
import Popover from "@mui/material/Popover";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Media from "./Media";
import LayeredTemplateView from "./LayeredTemplateView";

const options = [
  <Media
    thumbnail={
      "https://th.bing.com/th/id/OIP.dI0F09CA8Oc_NYvzk2MuBAHaE8?pid=ImgDet&rs=1"
    }
    key={"1"}
    title={"this is title"}
  />,
  <Media
    thumbnail={
      "https://th.bing.com/th/id/OIP.dI0F09CA8Oc_NYvzk2MuBAHaE8?pid=ImgDet&rs=1"
    }
    key={"2"}
    title={"this is title"}
  />,
  <Media
    thumbnail={
      "https://th.bing.com/th/id/OIP.dI0F09CA8Oc_NYvzk2MuBAHaE8?pid=ImgDet&rs=1"
    }
    key={"3"}
    title={"this is titlethis is titlethis is titlethis is titlethis is title"}
  />,
];
const ITEM_HEIGHT = 48;

export default function Day({ dayValue, className, viewType = "year" }) {
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
        style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
        aria-describedby={id}
      >
        <p>{dayValue}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {viewType === "month" ? (
            <LayeredTemplateView images={["something", "something2"]} />
          ) : null}
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
                  width: "20ch",
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.key} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Popover>
    </div>
  );
}
