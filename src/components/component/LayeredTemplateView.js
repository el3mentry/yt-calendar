import layer from "../../assets/layer.gif";

export default function LayeredTemplateView({ imageLinks = [] }) {
  return (
    <div style={{ position: "relative", width: "100%", zIndex: "-1" }}>
      <div style={{ position: "absolute", top: "-2px", left: "-2px" }}>
        {imageLinks.length > 1 ? (
          <div
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          >
            <img src={layer} height={"20px"} width={"20px"} alt="bouncyLayer" />
          </div>
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
          alt={""}
        />
      </div>
    </div>
  );
}
