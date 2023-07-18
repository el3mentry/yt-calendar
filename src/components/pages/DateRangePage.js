import { CALENDARPAGE } from "../../variables";

export default function DateRangePage({setPage})  {
    return <div onClick={() => setPage(CALENDARPAGE)}>This is daterangepage</div>;
}