import Logo from "./Logo";
import Box from "@mui/material/Box";
import React from "react";
import ChangePage from "./ChangePage";

export default function LeftNavbarSection({
  channelThumbnail,
  channelName,
  channelUsername,
  setPage,
}) {
  return (
    <Box
      id="navbar-left-section"
      sx={{
        display: "flex",
        flex: "1 1 100px",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "33.33%",
      }}
    >
      <Box id="yt-cal-logo" sx={{ mt: "6px" }}>
        <Logo />
      </Box>

      <span
        style={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          border: "1px solid #c4c4c4",
          maxWidth: "59%",
          borderRadius: "4px",
          padding: "0 5px 0 5px",
          margin: "auto",
          cursor: "pointer",
        }}
        id={"channel-name-div"}
        onClick={() =>
          window.open("https://youtube.com/" + channelUsername, "_blank")
        }
      >
        <Box
          id="channel-logo"
          sx={{
            height: "30px",
            width: "30px",
            minWidth: "30px",
            borderRadius: "50%",
            backgroundImage: `url(${channelThumbnail})`,
            backgroundSize: "contain",
            position: "relative"
          }}
        ></Box>

        <span
          id="channel-title-input"
          style={{
            marginLeft: "7px",
            marginRight: "5px",
            outline: "none",
            resize: "none",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {channelName}
        </span>
      </span>
      <ChangePage
        setPage={setPage}
        direction={"column"}
        style={{ position: "absolute", top: "65px", display: { xs: "none", md: "flex" } }}
      />
    </Box>
  );
}
