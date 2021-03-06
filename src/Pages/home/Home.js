import React from 'react';
import "./home.css"
import Header from "../../Components/Header/Header";
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widgets";

function Home() {
  return (
  <>
  <div className="home">
    <Header/>
    <div className="app__body">
        <Sidebar/>
        <Feed />
        <Widget />
    </div>
  </div>
  </>
  )
}

export default Home;
