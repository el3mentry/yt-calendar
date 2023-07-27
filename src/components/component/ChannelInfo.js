export default function ChannelInfo({ channelName, channelId }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "70%",
        margin: "12%",
      }}
      id="left-section"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "40%",
          backgroundColor: "grey",
          borderRadius: "20px",
        }}
      >
        <div id="channel-pfp"
          style={{
            borderRadius: "50%",
            backgroundColor: "red",
            height: "75px",
            width: "75px",
            marginTop: "10px",
          }}
        ></div>
        <h2
          style={{
            fontSize: "1.3rem",
          }}
        >
          {channelName}
        </h2>
        <div>{channelId}</div>
      </div>
    </div>
  );
}
