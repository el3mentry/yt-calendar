import YearlyCalendar from "../component/YearlyCalendar";
import ChannelInfo from "../component/ChannelInfo";
import { Grid } from "@mui/material";
import Logo from "../component/Logo";

export default function CalendarPage({ setPage }) {
  return (
    <Grid container>
      <Grid container xs={2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            marginLeft: "1.5rem",
            marginTop: "1.5rem"
          }}
        >
          <Logo />
          <ChannelInfo channelId={'aofweijawmklfk'} channelName={'alsdfjoiaewmm'}/>
        </div>
      </Grid>
      <Grid container xs={10}>
        <YearlyCalendar />
      </Grid>
    </Grid>
  );
}
