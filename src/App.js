import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import WebFont from "webfontloader";
import { CircularProgress } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans"],
      },
      loading: () => {
        setIsLoading(true);
      },
      active: () => {
        setIsLoading(false);
      }
    });
  }, []);
  return (isLoading? <CircularProgress />: <Main />);
}

export default App;
