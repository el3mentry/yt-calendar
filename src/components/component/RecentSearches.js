import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function RecentSearches() {
  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="small-label">Recents</InputLabel>
      <Select
        labelId="small-label"
        id="select-small"
        value={search}
        label="Search"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>MrFeast</MenuItem>
        <MenuItem value={20}>El3</MenuItem>
        <MenuItem value={30}>Mentry</MenuItem>
      </Select>
    </FormControl>
  );
}
