import React from "react";
import { Card, Navbar } from "../../Components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-heading">
        <h3 className="heading">Assets</h3>
      </div>
      <div className="assests">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
