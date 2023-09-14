import { Button, TextField } from "@mui/material";
import { DATERANGEPAGE } from "../../variables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function HomePage({ setPage, setChannelId }) {
  const [channnelIdFieldColor, setChannelIdFieldColor] = useState("neutral");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <TextField
          id="channel-id-field"
          label="channel-id"
          variant="outlined"
          color={channnelIdFieldColor}
          focused={true}
          sx={{
            width: 1 / 4,
          }}
          onClick={() => {
            setChannelIdFieldColor("primary");
          }}
          onBlur={() => {
            setChannelIdFieldColor("neutral");
          }}
        />
      </ThemeProvider>
      <Button
        onClick={() => {
          setChannelId(document.getElementById("channel-id-field").value);
          setPage(DATERANGEPAGE);
        }}
        variant="contained"
        sx={{ height: "3.4rem", ml: "1em" }}
      >
        Proceed
      </Button>
    </div>
  );
}
