export default function Media({ title, thumbnail, videoLink, totalVideos }) {
  console.log(totalVideos);
  return (
    <a
      style={{
        width: "100%",
        textDecoration: "none",
        maxWidth: "100%",
        marginBottom: totalVideos > 1 ? "30px": "10px",
      }}
      id={"thumbnail-field"}
      href={videoLink}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={thumbnail}
        style={{
          width: "100%",
          borderRadius: "8px",
          minHeight: "150px",
        }}
        alt="alternative text"
        id={"thumbnail-image-field"}
      />
      <p style={{ fontSize: "0.8rem", color: "#000" }}>
        {title.length > 60 ? title.substring(0, 57) + "..." : title}
      </p>
    </a>
  );
}
