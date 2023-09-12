import layer from "../../assets/layer.gif";

export default function LayeredTemplateView({ images = [] }) {
  return (
    <div style={{ position: "relative", width: "100%", zIndex: "-1" }}>
      <div style={{ position: "absolute", top: "2px", left: "2px" }}>
        {images.length > 1 ? (
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
          src={
            "https://th.bing.com/th/id/OIP.dI0F09CA8Oc_NYvzk2MuBAHaE8?pid=ImgDet&rs=1"
          }
          alt={"image of an elephant"}
        />
      </div>
    </div>
  );
}
