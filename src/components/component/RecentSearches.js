import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function RecentSearches({ recents }) {
  const [search, setSearch] = React.useState("None");
  recents = ["None", "Mr Feast", "Garsh"];

  const handleChange = (event, newValue) => {
    setSearch(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={search}
      options={recents}
      onChange={handleChange}
      onInputChange={(event, newInputValue) => {
        setSearch(newInputValue);
      }}
      size="small"
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Recents" />}
    />
  );
}
