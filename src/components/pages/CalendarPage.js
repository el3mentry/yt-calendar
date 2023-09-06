import YearlyCalendar from "../component/YearlyCalendar";
import ChannelInfo from "../component/ChannelInfo";
import { Grid } from "@mui/material";
import Navbar from "../component/Navbar";
import { useState } from "react";
import dayjs from "dayjs";
import { YEAR } from "../../variables";

export default function CalendarPage({ setPage }) {
  // const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [calendarView, setCalendarView] = useState(YEAR);
  const [date, setDate] = useState(dayjs());
  return (
    <Grid container>
      <Grid item container xs={12}>
        <Navbar
          calendarView={calendarView}
          setCalendarView={setCalendarView}
          date={date}
          setDate={setDate}
        />
      </Grid>

      <Grid item container xs={2} sx={{ paddingTop: "70px" }}>
        <ChannelInfo channelId={"0123456789"} channelName={"MrFeast"} />
      </Grid>

      <Grid container item xs={10} sx={{ paddingTop: "85px" }}>
        <YearlyCalendar
          showNumberOfMonths={calendarView}
          date={date}
          setDate={setDate}
        />
      </Grid>
    </Grid>
  );
}
