import React, { useEffect, useState } from "react";
import axios from "axios";
import SideMenu from "./SideMenu";
import '../../style/styles.css';
const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/user/main/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <SideMenu />
      <h2 className="text-center">Dashboard</h2>
      <p className="text-center">Total Registered Users: {data.total_users}</p>
      <p className="text-center">
        Users Who Bought Motorcycles: {data.users_with_motos}
      </p>
      <p className="text-center">
        Total Motorcycles Bought: {data.total_moto_count}
      </p>
      <p className="text-center">
        Total Price of All Motorcycles: ${data.total_moto_price}
      </p>
    </div>
  );
};

export default Dashboard;
