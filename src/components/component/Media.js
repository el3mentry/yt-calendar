export default function Media({ title, thumbnail }) {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={thumbnail}
        style={{ width: "100%", borderRadius: "8px" }}
        alt="alternative text"
        
      />
      <p style={{ fontSize: "14px" }} title={title}>
        {(title.substring(0, 25)) + ((title.length > 25) ? "..." : "")}
      </p>
    </div>
  );
}
