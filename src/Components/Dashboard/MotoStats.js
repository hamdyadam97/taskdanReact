import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "./SideMenu";
import '../../style/styles.css';
const MotoStats = () => {
  const [stats, setStats] = useState({
    available_motos: 0,
    motos_bought_this_month: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token from local storage

    axios
      .get("http://localhost:8000/moto/moto-stats/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching moto stats:", error);
      });
  }, []);

  return (
    <div>
        <SideMenu />
      <h2>Moto Stats</h2>
      <p>Available Motos: {stats.available_motos}</p>
      <p>
        Motos Bought by Users Registered This Month:{" "}
        {stats.motos_bought_this_month}
      </p>
    </div>
  );
};

export default MotoStats;
