import React, { useEffect, useState } from "react";

const RequestsDisplay = ({ socket }) => {
  console.log("In RequesDisplay component");
  const [requests, setRequests] = useState([]);
  const [wsConnected, setWSConnected] = useState(false);

  const PRIVATE_WS_ROOM = "123abc";
  socket.emit("join", PRIVATE_WS_ROOM);

  useEffect(() => {
    socket.on("wsConnected", (boolean) => {
      setWSConnected(boolean);
      console.log("Connection ESTABLISHED SUCCESSFULLY!!!!");
    });
  }, [socket]);

  useEffect(() => {
    socket.on("requestResponse", (data) => {
      console.log("Data Received");
      console.log(data, " request received in display");
      let newRequests = (requests) => [...requests, data];
      setRequests(newRequests);
    });
  }, [socket]);

  return !wsConnected ? (
    <h1>Connecting to server!!!!</h1>
  ) : (
    <div>
      <h1>RequestsDisplay</h1>
      {requests.map((request, index) => {
        console.log(requests);
        return (
          <h1 key={index}>
            CALL_RECEIVED_ON: {request.CALL_RECEIVED_ON} <br />
            Restaurant_Name: {request.Restaurant_Name} <br />
            Customer_ph_no: {request.Customer_ph_no}
          </h1>
        );
      })}
    </div>
  );
};

export default RequestsDisplay;
