import YearlyCalendar from "../component/YearlyCalendar";
import ChannelInfo from "../component/ChannelInfo";
import { Grid } from "@mui/material";
import Navbar from "../component/Navbar";

export default function CalendarPage({ setPage }) {
  return (
    <Grid container>
      <Grid item container xs={12}>
        <Navbar />
      </Grid>

      <Grid item container xs={2}>
        <ChannelInfo channelId={"0123456789"} channelName={"MrFeast"} />
      </Grid>

      <Grid container item xs={10}>
        <YearlyCalendar />
      </Grid>
    </Grid>
  );
}
