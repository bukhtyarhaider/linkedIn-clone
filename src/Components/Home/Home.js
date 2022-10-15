import React from "react";
import Feed from "../Feed";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Widgets from "../Widgets";
import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <Header />
      <div className="home_body ">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default Home;
