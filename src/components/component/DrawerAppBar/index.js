import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import { MONTH, YEAR } from "../../../variables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LeftNavbarSection from "./LeftNavbarSection";
import MiddleNavbarSection from "./MiddleNavbarSection";
import RightNavbarSection from "./RightNavbarSection";
import DrawerElements from "./DrawerElements";

const theme = createTheme({
  palette: {
    main: "#ffffff",
  },
});

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props) {
  const {
    window,
    calendarView,
    setCalendarView,
    date,
    setDate,
    setPage,
    totalVideoCount = 0,
    startDate = null,
    endDate = null,
    channelName = "ChannelName",
    channelThumbnail = "",
    changeToNextMonth,
    changeToPreviousMonth,
    changeToNextYear,
    changeToPreviousYear,
  } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function changeCalendarView() {
    if (calendarView === MONTH) setCalendarView(YEAR);
    else setCalendarView(MONTH);
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        <DrawerElements setPage={setPage} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar component="nav" color="main" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                id="navbar-box"
                sx={{
                  height: "60px",
                  width: "100vw",
                  backgroundColor: "white",
                  display: "flex",
                  flexGrow: 1,
                  zIndex: "99",
                  position: "relative",
                }}
              >
                <LeftNavbarSection
                  channelName={channelName}
                  channelThumbnail={channelThumbnail}
                />
                <MiddleNavbarSection
                  calendarView={calendarView}
                  changeCalendarView={changeCalendarView}
                  date={date}
                  setDate={setDate}
                  changeToNextMonth={changeToNextMonth}
                  changeToPreviousMonth={changeToPreviousMonth}
                  changeToNextYear={changeToNextYear}
                  changeToPreviousYear={changeToPreviousYear}
                />
                <RightNavbarSection
                  startDate={startDate}
                  endDate={endDate}
                  setPage={setPage}
                  totalVideoCount={totalVideoCount}
                  date={date}
                  calendarView={calendarView}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
