
function Time() {
  const now = new Date();

  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <p>
      This is the current Time {date} - {time}
    </p>
  );
}

export default Time;
