import React from 'react';
import "./profile.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Widgets from '../../Components/Widget/Widgets'; 


function profile() {
    return (
        <>
          <Header />
          <div className="app__body">
          <div className="profile">
            <Sidebar />
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img
                    className="profileCoverImg"
                    src="assets/fond-3.jpg"
                    alt=""
                  />
                  <img
                    className="profileUserImg"
                    src="assets/Amina.PNG"
                    alt=""
                  />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak Kocaoglu</h4>
                    <span className="profileInfoDesc">Hello my friends!</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed />
                <Widgets profile/>
              </div>
            </div>
          </div>

          </div>
        </>
      );
    }

export default profile;
