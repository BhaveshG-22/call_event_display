import React, { useEffect, useState } from "react";

const RequestsDisplay = ({ socket }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    socket.on("requestResponse", (data) => {
      console.log("Data Received");
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
            CALL_RECEIVED_ON: {request.CALL_RECEIVED_ON}
            Restaurant_Name: {request.Restaurant_Name}
            Customer_ph_no: {request.Customer_ph_no}
          </h1>
        );
      })}
    </div>
  );
};

export default RequestsDisplay;
