import { Box } from "@mui/material";
import errorLogo from "../../assets/warning.png";

export default function ErrorPage({ message }) {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={errorLogo} alt={"error svg"} height={30} width={30} style={{marginRight: "10px"}} />
        <p>{message}</p>
      </Box>
    </Box>
  );
}
