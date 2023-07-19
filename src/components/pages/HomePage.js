import { Button, TextField } from "@mui/material";
import { DATERANGEPAGE } from "../../variables";

export default function HomePage({ setPage }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextField id="outlined-basic" label="channel-id" variant="outlined" sx={{width: 1/4}}/>
      <Button
        onClick={() => setPage(DATERANGEPAGE)}
        variant="contained"
        sx={{ height: "3.4rem", ml: "1em"}}
      >
        Next
      </Button>
    </div>
  );
}
