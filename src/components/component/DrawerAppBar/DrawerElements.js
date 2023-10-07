import ChangeView from "./ChangeView";

export default function DrawerElements({ setPage }) {
  return (
    <div>
      <ChangeView setPage={setPage} direction="column" />
    </div>
  );
}
