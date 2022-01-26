import React from 'react';
import "./profile.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Widgets from '../../Components/Widget/Widgets'; 
import axiosInstance from '../../config';
import { useState, useEffect } from 'react';
import {useParams} from "react-router"

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const params = useParams().username
  useEffect(() => {
    const fetchUser = async()=>{
        const res = await axiosInstance.get(`/users?username=`+ params)
        .catch(err => {
            res.status(500).json(err)
        })
        setUser(res.data)
    }
    fetchUser();
}, [params])
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
                    src={user.coverPicture ? user.coverPicture : PF+ "noCover.png"}
                    alt=""
                  />
                  <img
                    className="profileUserImg"
                    src={user.coverPicture ? user.coverPicture : PF+ "noAvatar.png"}
                    alt=""
                  />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed username={params}/>
                <Widgets user={user}/>
              </div>
            </div>
          </div>

          </div>
        </>
      );
    }

export default Profile;
