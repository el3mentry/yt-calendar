export default function ChannelInfo({ channelName, channelId }) {
  return (
    <div
      style={{
        width: "100%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "40%",
        backgroundColor: "grey",
        borderRadius: "50px",
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "red",
          height: "75px",
          width: "75px",
          marginTop: "10px"
        }}
      ></div>
      <h2>{channelName}</h2>
      <div>{channelId}</div>
    </div>
  );
}
