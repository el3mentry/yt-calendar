import summation from "../../assets/summation.svg";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';
import { useState } from "react";

export default function TotalVids({ totalVideoCount = 0 }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "summation-popover" : undefined;

  return (
    <>
      <IconButton aria-label="delete" size="small" onClick={handleClick}>
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: "#6cabdd",
            width: "25px",
            height: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={summation}
            alt={"Total Videos"}
            style={{
              width: "100%",
              height: "65%",
              cursor: "pointer",
            }}
          />
        </div>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>Total Videos = {totalVideoCount}</Typography>
      </Popover>
    </>
  );
}
