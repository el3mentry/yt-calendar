import { Box } from "@mui/material";
import DrawerChangeView from "./DrawerChangeView";

export default function DrawerElements({ setPage }) {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <DrawerChangeView setPage={setPage} />
    </Box>
  );
}
