import YearlyCalendar from "../component/YearlyCalendar";
import ChannelInfo from "../component/ChannelInfo";
import { Grid } from "@mui/material";
import Navbar from "../component/Navbar";
import { useState } from "react";
import dayjs from "dayjs";

export default function CalendarPage({ setPage }) {
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  return (
    <Grid container>
      <Grid item container xs={12}>
        <Navbar currentYear={currentYear} setCurrentYear={setCurrentYear} />
      </Grid>

      <Grid item container xs={2}>
        <ChannelInfo channelId={"0123456789"} channelName={"MrFeast"} />
      </Grid>

      <Grid container item xs={10}>
        <YearlyCalendar showNumberOfMonths={12} year={currentYear} />
      </Grid>
    </Grid>
  );
}
