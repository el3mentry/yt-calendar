export default function Media({ title, thumbnail, videoLink }) {
  return (
    <div
      style={{ width: "100%" }}
      id={"thumbnail-field"}
      onClick={() => window.open(videoLink, "_blank")}
    >
      <img
        src={thumbnail}
        style={{ width: "100%", borderRadius: "8px" }}
        alt="alternative text"
        id={"thumbnail-image-field"}
      />
      <input id={"channel-title-input"} readOnly={true} value={title} />
    </div>
  );
}
