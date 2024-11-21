import io from "socket.io-client";
import RequestsDisplay from "./components/RequestsDisplay";

function App() {
  const socket = io.connect(
    "https://callmonitoringwebsocket.onrender.com"
  );

  socket.emit("join", "productionApp");

  return (
    <div>
      <div>Welcome To Call Event Display Portal</div>
      <RequestsDisplay socket={socket} />
    </div>
  );
}

export default App;
