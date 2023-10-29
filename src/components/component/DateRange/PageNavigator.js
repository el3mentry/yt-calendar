import { Button } from "@mui/material";
import { HOMEPAGE } from "../../../variables";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PageNavigator({
  setPage,
  clearDateRange,
  handleProceed,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}>
      <IconButton sx={{ mr: "1rem" }} onClick={() => setPage(HOMEPAGE)}>
        <ArrowBackIcon sx={{ height: "30px", width: "30px" }} />
      </IconButton>

      <Button
        onClick={clearDateRange}
        sx={{ mr: "1rem", color: "gray", borderColor: "gray" }}
        variant="outlined"
      >
        Clear Range
      </Button>

      <IconButton onClick={handleProceed}>
        <ArrowForwardIcon sx={{ height: "30px", width: "30px" }} />
      </IconButton>
    </div>
  );
}
