import { useEffect, useState } from "react";
import summation from "../../assets/summation.svg";

export default function TotalVids({ totalVideoCount = 0 }) {
  return (
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
          marginLeft: "0.005em",
          cursor: "pointer",
        }}
        onClick={() => {
          alert(totalVideoCount);
        }}
      />
    </div>
  );
}
