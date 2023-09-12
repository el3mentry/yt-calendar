import Media from "./Media";
import layer from "../../assets/layer.gif";

export default function LayeredTemplateView({ images = [] }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "2px", left: "2px"}}>
        {images.length > 1 ? (
          <img src={layer} height={"20"} width={"20"} alt="bouncyLayer" />
        ) : null}
      </div>
      <div
        style={{
          height: "20px",
          width: "7rem",
          borderRadius: "4px",
          flexGrow: 1,
        }}
      >
        <Media
          thumbnail={
            "https://th.bing.com/th/id/OIP.dI0F09CA8Oc_NYvzk2MuBAHaE8?pid=ImgDet&rs=1"
          }
          key={"1"}
          title={""}
        />
      </div>
    </div>
  );
}
