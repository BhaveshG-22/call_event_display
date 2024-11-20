import io from "socket.io-client";
import RequestsDisplay from "./components/RequestsDisplay";

function App() {
  const socket = io.connect(
    process.env.REACT_APP_CALL_MONITORING_WEB_SOCKET_LINK
  );

  socket.emit("join", process.env.REACT_APP_PRIVATE_WS_ROOM);

  return (
    <div>
      <div>Welcome To Call Event Display Portal</div>
      <RequestsDisplay socket={socket} />
    </div>
  );
}

export default App;
