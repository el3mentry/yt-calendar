export default function Media({ title, thumbnail, videoLink }) {
  return (
    <a
      style={{ width: "100%", textDecoration: "none" }}
      id={"thumbnail-field"}
      href={videoLink}
      target="_blank"
    >
      <img
        src={thumbnail}
        style={{ width: "100%", borderRadius: "8px", minHeight: "150px" }}
        alt="alternative text"
        id={"thumbnail-image-field"}
      />
      <input id={"channel-title-input"} readOnly={true} value={title} />
    </a>
  );
}
