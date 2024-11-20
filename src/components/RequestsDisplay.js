import React, { useEffect, useState } from "react";

const RequestsDisplay = ({ socket }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    socket.on("requestResponse", (data) => {
      console.log(data, " request received in display");
      let newRequests = (requests) => [...requests, data];
      setRequests(newRequests);
    });
  }, [socket]);

  return (
    <div>
      <h1>RequestsDisplay</h1>
      {requests.map((request, index) => {
        console.log(requests);
        return (
          <h1 key={index}>
            {request.Number}
            {request.Call_Received_ON}
            {request.CLient}
          </h1>
        );
      })}
    </div>
  );
};

export default RequestsDisplay;
