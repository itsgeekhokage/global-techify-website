/** @format */

import React, { useEffect, useState } from "react";
import MeetCard from "./components/MeetCard";
import loader from "./../assets/loader.svg"

const StudentAcceptedRequests = () => {
  const buttons = ["pay"];
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  const studentId = JSON.parse(localStorage.getItem("gtechify!#")).id;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_HOST_API}/meet/all/student/${studentId}`
        );
        if (!response.ok) {
          alert(response.json().message || "server error");
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const req = data.filter(
          (item) => item.approval === true && item.payment === false
        );
        console.log("aa",req);
        setRequests(req);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5vw" }}>
      {loading ? (
        <img
          src={loader}
          alt="Loading..."
        />)
      :
      ( requests.length
        ? requests.map((item, key) => (
            <MeetCard
              key={key}
              buttons={buttons}
              item={item}
            />
          ))
        : "No Approved meets yet......")}
    </div>
  );
};

export default StudentAcceptedRequests;
