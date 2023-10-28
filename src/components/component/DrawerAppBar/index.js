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
import YearSelection from "./YearSelection";
import MonthSelection from "./MonthSelection";

const theme = createTheme({
  palette: {
    main: "#ffffff",
  },
});

const drawerWidth = 240;

export default function DrawerAppBar(props) {
  const {
    calendarView,
    setCalendarView,
    date,
    setDate,
    setPage,
    totalVideoCount = 0,
    startDate = null,
    endDate = null,
    channelName = "ChannelName",
    channelUsername = "",
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
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-around",
        }}
      >
        <DrawerElements
          setPage={setPage}
          changeCalendarView={changeCalendarView}
          calendarView={calendarView}
          startDate={startDate}
          endDate={endDate}
          date={date}
          totalVideoCount={totalVideoCount}
        />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar
          component="nav"
          color="main"
          sx={{ boxShadow: "none" }}
          id="fetcher"
        >
          <Toolbar
            sx={{ justifyContent: "space-between", padding: "0 !important" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, marginLeft: "16px" }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{ borderRadius: 1, display: { md: "none" } }}
              id="year-selection-wrapper"
            >
              {calendarView === MONTH ? (
                <MonthSelection
                  date={date}
                  setDate={setDate}
                  changeToNextMonth={changeToNextMonth}
                  changeToPreviousMonth={changeToPreviousMonth}
                />
              ) : (
                <YearSelection
                  date={date}
                  setDate={setDate}
                  changeToPreviousYear={changeToPreviousYear}
                  changeToNextYear={changeToNextYear}
                />
              )}
            </Box>
            <Box
              id="channel-logo"
              sx={{
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                backgroundImage: `url(${channelThumbnail})`,
                backgroundSize: "contain",
                display: { md: "none" },
                marginRight: "16px",
              }}
              onClick={() =>
                window.open("https://youtube.com/" + channelUsername, "_blank")
              }
            ></Box>
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
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
                <LeftNavbarSection
                  channelName={channelName}
                  channelThumbnail={channelThumbnail}
                  channelUsername={channelUsername}
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
