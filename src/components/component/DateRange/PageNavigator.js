import { Button } from "@mui/material";
import { HOMEPAGE } from "../../../variables";

export default function PageNavigator({setPage, clearDateRange, handleProceed}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "1.5rem" }}>
      <Button
        sx={{ mr: "1rem" }}
        onClick={() => setPage(HOMEPAGE)}
        variant="outlined"
      >
        Back
      </Button>
      <Button
        onClick={clearDateRange}
        sx={{ mr: "1rem", color: "gray", borderColor: "gray" }}
        variant="outlined"
      >
        Clear Range
      </Button>
      <Button onClick={handleProceed} variant="contained">
        Proceed
      </Button>
    </div>
  );
}
