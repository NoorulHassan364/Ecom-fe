import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
// importing charts for the analytics
import { Bar, Line } from "react-chartjs-2";
// importing backend url
import api from "../../../api";

const AdminAnalytics = () => {
  // declaring states to manage analytics
  const [userAna, setUserAna] = useState([]);
  const [productAna, setProductAna] = useState([]);
  const labels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // data that we will show into the user chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: "User Registerd",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: userAna,
      },
    ],
  };
  // data2 that we will into the product chat
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "Products Sales",
        backgroundColor: "blue",
        borderColor: "blue",
        data: productAna,
      },
    ],
  };
  // funtion to get user analytics form the backend
  const userAnalytics = async () => {
    try {
      const res = await api.get(`/admin/userAnalytics`);
      setUserAna(res.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  // funtion to get product analytics form the backend
  const productAnalytics = async () => {
    try {
      const res = await api.get(`/admin/productAnalytics`);
      setProductAna(res.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    userAnalytics();
    productAnalytics();
  }, []);
  return (
    <div className="container-fluid college_container shadow">
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ color: "grey" }}>Analytics</h4>
      </div>
      <hr />
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {/* Calling the Bar chart component  */}
        <Bar style={{ width: "3rem" }} data={data} />
        {/* calling the Line chart component */}
        <Line style={{ width: "3rem", marginTop: "2rem" }} data={data2} />
      </div>
    </div>
  );
};

export default AdminAnalytics;
