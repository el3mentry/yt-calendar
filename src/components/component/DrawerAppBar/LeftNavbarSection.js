import Logo from "./Logo";
import Box from "@mui/material/Box";
import React from "react";

export default function LeftNavbarSection({ channelThumbnail, channelName }) {
  return (
    <Box
      id="navbar-left-section"
      sx={{
        display: "flex",
        flex: "1 1 100px",
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
          flexShrink: 1,
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          padding: "0 5px 0 5px",
          marginLeft: "2.6vw",
          flexBasis: "150px"
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

        <input
          role="anchor"
          readOnly={true}
          id="channel-title-input"
          style={{
            marginLeft: "7px",
            marginRight: "5px",
            outline: "none"
          }}
          type="text"
          value={channelName}
        />
      </Box>
    </Box>
  );
}
