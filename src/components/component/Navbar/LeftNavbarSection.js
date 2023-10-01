import Logo from "./Logo";
import Box from "@mui/material/Box";
import React from "react";

export default function LeftNavbarSection({ channelThumbnail, channelName }) {
  return (
    <Box
      id="navbar-left-section"
      sx={{
        display: "flex",
        width: "33.333%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box id="yt-cal-logo" sx={{ mt: "6px", ml: "2vw" }}>
        <Logo />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          border: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          padding: "0 5px 0 5px",
          marginLeft: "50px",
          marginRight: "auto",
        }}
      >
        <Box
          id="channel-logo"
          sx={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            backgroundImage: `url(${channelThumbnail})`,
            backgroundSize: "contain",
          }}
        ></Box>
        <Box
          id="channel-title"
          sx={{
            display: "flex",
            flexGrow: 1,
            marginLeft: "7px",
            marginRight: "5px",
          }}
        >
          <Box
            title={channelName}
            sx={{ flexGrow: 1, textAlign: "center", color: "#0f0f0f" }}
          >
            {channelName.length > 18
              ? channelName.substring(0, 15) + "..."
              : channelName}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
