import { HOMEPAGE } from "../../variables";

export default function CalendarPage({setPage}) {
  return <div onClick={() => setPage(HOMEPAGE)}>This is calendar...</div>;
}
