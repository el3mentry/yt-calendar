import Media from "./Media";
import layer from "../../assets/layer.gif";

export default function LayeredTemplateView({ images = [] }) {
  return (
    <div>
      <div style={{ position: "relative" }}>
        {images.length > 1 ? (
          <img src={layer} height={"40"} width={"40"} alt="bouncyLayer" />
        ) : null}
      </div>
      <div
        style={{
          height: "4rem",
          width: "80px",
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
