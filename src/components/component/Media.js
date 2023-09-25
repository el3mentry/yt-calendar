export default function Media({ title, thumbnail }) {
  return (
    <div style={{ width: "100%" }} id={"thumbnail-field"}>
      <img
        src={thumbnail}
        style={{ width: "100%", borderRadius: "8px" }}
        alt="alternative text"
        id={"thumbnail-image-field"}
      />
      <br />
      <input id={"channel-title-input"} readOnly={true} value={title} />
    </div>
  );
}
