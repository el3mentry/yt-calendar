import Logo from "./Logo";
import Box from "@mui/material/Box";
import React from "react";

export default function LeftNavbarSection({ channelThumbnail, channelName }) {
  return (
    <Box
      id="navbar-left-section"
      sx={{
        display: "flex",
        flexGrow: 0.8,
        flexShrink: 1.2,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box id="yt-cal-logo" sx={{ mt: "6px" }}>
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
          marginLeft: "2.6vw",
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
            sx={{ flexGrow: 1, textAlign: "center", color: "#0f0f0f", opacity: "0.85" }}
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
