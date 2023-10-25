import Logo from "./Logo";
import Box from "@mui/material/Box";
import React from "react";

export default function LeftNavbarSection({
  channelThumbnail,
  channelName,
  channelUsername,
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
          marginLeft: "2.6vw",
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
    </Box>
  );
}
