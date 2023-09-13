import layer from "../../assets/layer.gif";

export default function LayeredTemplateView({ imageLinks = [] }) {
  return (
    <div style={{ position: "relative", width: "100%", zIndex: "-1" }}>
      <div style={{ position: "absolute", top: "2px", left: "2px" }}>
        {imageLinks.length > 1 ? (
          <img src={layer} height={"20"} width={"20"} alt="bouncyLayer" />
        ) : null}
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <img
          style={{
            borderRadius: "4px",
            width: "100%",
          }}
          src={imageLinks[0]}
          alt={"List of thumbnails"}
        />
      </div>
    </div>
  );
}
