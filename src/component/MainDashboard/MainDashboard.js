import React from "react";
import Cards from "../Cards/Cards";

import "./MainDashboard.css";
import Table from "../Table/Table";

const MainDashboard = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDashboard;
