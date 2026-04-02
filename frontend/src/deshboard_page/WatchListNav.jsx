import React, { useState, useEffect } from "react";
import "../assets/css/watchListNav.css";
import socket from "../socket";
import { indexData } from "../Data/indexData";

function WatchListNav() {
  const [indexDatax, setIndexData] = useState(indexData);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to finhub for index data");
    });

    socket.on("indexUpdateBatch", (data) => {
      if (data) {
        setIndexData((preData) =>
          preData.map((index) => {
            const newPoints = data[index.name];
            if (newPoints !== undefined) {
              return {
                ...index,
                price: newPoints,
              };
            }
            return index;
          }),
        );
      }
    });

    return () => {
      socket.off("indexUpdateBatch");
    };
  }, []);

  return (
    <div className="row px-0 ms-1 mt-md-0 mt-3 d-flex align-content-between border-pc ">
      <div className="div p-2 col-6 border rounded index-container index-container-pc desktop-height">
        <p className="padding-none m-0 font-w-name mb-0 ">
          {indexDatax?.[0]?.displayName}
        </p>
        <div className="div d-flex flex-row">
          <p className="padding-none m-0 index-points">
            {indexDatax?.[0]?.price}
          </p>
          <p className="ms-1 text-danger index-points small mt-0">-200</p>
          <p className="ms-1 text-danger index-points small mt-0">(1.25%)</p>
        </div>
      </div>
      <div className="div p-2 col-6 border rounded index-container index-container-pc  desktop-height">
        <p className="padding-none m-0 font-w-name mb-0">
          {indexDatax?.[1]?.displayName}
        </p>
        <div className="div d-flex flex-row">
          <p className="padding-none m-0 index-points ">
            {indexDatax?.[1]?.price}
          </p>
          <p className="ms-1 text-danger index-points small mt-0">-200</p>
          <p className="ms-1 text-danger index-points small mt-0">(1.25%)</p>
        </div>
      </div>
    </div>
  );
}

export default WatchListNav;
