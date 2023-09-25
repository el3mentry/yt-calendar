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
        zIndex: "-1",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 3,
        }}
        onClick={()=> {
          if(imageLinks.length === 1){
            window.open(imageLinks[0], "_blank")
          }
        }}
      >
        <img
          style={{
            borderRadius: "4px",
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
            zIndex: 2,
          }}
        >
          <img
            style={{
              borderRadius: "4px",
              width: imageWidth,
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
            zIndex: 1,
          }}
        >
          <img
            style={{
              borderRadius: "4px",
              width: imageWidth,
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
