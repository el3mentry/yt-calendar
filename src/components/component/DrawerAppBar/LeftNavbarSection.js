import Logo from "./Logo";
import Box from "@mui/material/Box";
import React from "react";

export default function LeftNavbarSection({ channelThumbnail, channelName, channelUsername }) {
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
          flex: "1 1 100px",
          borderColor: "#c4c4c4",
          borderRadius: "4px",
          padding: "0 5px 0 5px",
          marginLeft: "2.6vw",
          minWidth: "10%"
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

        <textarea
          onClick={()=> window.open("https://youtube.com/" + channelUsername, "_blank")}
          role="anchor"
          readOnly={true}
          id="channel-title-input"
          style={{
            marginLeft: "7px",
            marginRight: "5px",
            outline: "none",
            resize: "none",
            overflow: "hidden"
          }}
          type="text"
          rows={1}
          value={channelName}
        ></textarea>
      </Box>
    </Box>
  );
}
