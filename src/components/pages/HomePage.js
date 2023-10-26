import { Button, TextField } from "@mui/material";
import { DATERANGEPAGE } from "../../variables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Logo from "../component/DrawerAppBar/Logo";

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
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const handleEnterEvent = (ev) => {
    if (ev.key === "Enter") {
      document.getElementById("proceed-button").click();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEnterEvent);
    return () => {
      window.removeEventListener("keydown", handleEnterEvent);
    };
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarVisible(false);
  };

  return (
    <>
      <Box
        id="yt-cal-logo"
        sx={{ mt: "6px", top: "0", left: "1rem" }}
        className="p-fixed"
      >
        <Logo />
      </Box>
      <Grid
        container
        height="100vh"
        width="100vw"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          item
          xs={12}
          sm={8}
          md={8}
          lg={6}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
          m={"1rem"}
        >
          <Grid
            container
            item
            xs={12}
            sm={8}
            md={6}
            justifyContent={"center"}
          >
            <ThemeProvider theme={theme}>
              <TextField
                id="channel-id-field"
                label="channel-id"
                variant="outlined"
                color={channnelIdFieldColor}
                focused={true}
                autoFocus={true}
                onClick={() => {
                  setChannelIdFieldColor("primary");
                }}
                style={{ width: "100%" }}
                onBlur={() => {
                  setChannelIdFieldColor("neutral");
                }}
              />
            </ThemeProvider>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={8}
            md={2}
            justifyContent={"center"}
          >
            <Button
              id={"proceed-button"}
              onClick={() => {
                let channelIdValue =
                  document.getElementById("channel-id-field").value;
                if (channelIdValue.trim() === "") {
                  setIsSnackbarVisible(true);
                } else {
                  setChannelId(channelIdValue);
                  setPage(DATERANGEPAGE);
                }
              }}
              variant="contained"
              sx={{ height: "3.4rem" }}
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} textAlign="right">
        <Snackbar
          open={isSnackbarVisible}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            variant="filled"
            severity="warning"
            sx={{ width: "100%" }}
          >
            Channel ID cannot be empty.
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
}
