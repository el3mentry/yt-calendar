import { useEffect, useState } from "react";

export default function StackedTemplateView({ imageLinks = [] }) {
  const [imageWidth, setImageWidth] = useState("100%");

  useEffect(() => {
    if (imageLinks.length > 1) setImageWidth("80%");
    else if (imageLinks.length > 2) setImageWidth("60%");
  }, [imageLinks.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        marginTop: "5px",
        marginBottom: "10px",
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          zIndex: 1,
          aspectRatio: "16 / 9",
        }}
      >
        <img
          style={{
            borderRadius: "4px",
            border: imageLinks[0]
              ? "1px solid rgba(0, 0, 0, 0.6)"
              : "1px solid white",
            width: imageWidth,
            marginBottom: "5px",
          }}
          src={imageLinks[0]}
          alt={""}
        />
      </div>

      {imageLinks.length > 1 ? (
        <div
          style={{
            position: "absolute",
            left: "-10px",
            top: "10px",
            width: "100%",
            zIndex: -1,
            aspectRatio: "16 / 9",
          }}
        >
          <img
            style={{
              borderRadius: "4px",
              width: imageWidth,
              border: imageLinks[1]
                ? "1px solid rgba(0, 0, 0, 0.6)"
                : "1px solid white",
              marginBottom: "5px",
            }}
            src={imageLinks[1]}
            alt={""}
          />
        </div>
      ) : null}

      {imageLinks.length > 2 ? (
        <div
          style={{
            position: "absolute",
            left: "-20px",
            top: "20px",
            width: "100%",
            zIndex: -2,
            aspectRatio: "16 / 9",
          }}
        >
          <img
            style={{
              borderRadius: "4px",
              width: imageWidth,
              border: imageLinks[2]
                ? "1px solid rgba(0, 0, 0, 0.6)"
                : "1px solid white",
              marginBottom: "5px",
            }}
            src={imageLinks[2]}
            alt={""}
          />
        </div>
      ) : null}
    </div>
  );
}
