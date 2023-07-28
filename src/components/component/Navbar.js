import Logo from "../component/Logo";
import YearSelection from "./YearSelection";
import RecentSearches from "./RecentSearches";

export default function Navbar({ currentYear, setCurrentYear }) {
  return (
    <div
      style={{
        height: "60px",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        padding: "0.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "start",
          marginLeft: "5%",
          alignItems: "center",
        }}
      >
        <div>
          <Logo />
        </div>
        <div style={{ marginLeft: "5%" }}>
          <YearSelection
            currentYear={currentYear}
            setCurrentYear={setCurrentYear}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "end",
          marginRight: "5%",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "5%" }}>
          <RecentSearches />
        </div>
        <div>
          <button>Year</button>
        </div>
      </div>
    </div>
  );
}
