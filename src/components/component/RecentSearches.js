import * as React from "react";
import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;

export default function RecentSearches({ recents }) {
  const [search, setSearch] = React.useState("");
  recents = ["None", "Mr Feast", "Garsh"];

  const handleChange = (event, newValue) => {
    setSearch(newValue);
    handleClose()
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="recents-icon-box">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
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
        {recents.map((recent) => (
          <MenuItem key={recent} selected={recent === search} onClick={handleChange}>
            {recent}
          </MenuItem>
        ))}
      </Menu>
    </div>

  );
}
