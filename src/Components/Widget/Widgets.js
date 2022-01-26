import React, { useContext } from 'react';
import "./Widgets.css";
import Online from "../Online/Online";
import { Users } from "../../dummyData";
import { useState, useEffect } from 'react';
import axiosInstance from "../../config";
import {Link} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { AuthContext } from '../../context/AuthContext';
import IconButton from '@mui/material/IconButton';


function Widgets({ user }) {
   const PF = process.env.REACT_APP_PUBLIC_FOLDER
   const [friends, setFriends] = useState([])
   const { user: currentUser, dispatch} = useContext(AuthContext)
   const [followed, setFollowed] = useState(
      currentUser.following.includes(user?._id))
    // console.log("FOLLOWED", followed)
  useEffect(()=> {
    const getFriends = async () => {
      try {
        const friendList = await axiosInstance.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  console.log(friends)
 
  const handleClick = async () => {
    try {
      if (!followed) {
        await axiosInstance.put("/users/"+user._id+"/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axiosInstance.put("/users/"+user._id+"/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

    const HomeRightbar = () => {
        return (
            <>
            <div className='widgets_wr_top_bthday'>
                <img className='widgets_wr_top_bthday_img' src ="https://img2.freepng.fr/20180428/tqq/kisspng-gift-card-gold-discounts-and-allowances-holiday-5ae4a80c2b7a19.3320938715249346681781.jpg" alt=""/>
                <span>
                    <b>Amina Elk</b> et <b>3 autres</b> murissent
                </span>
            </div>
            <div className='widgets_wr_middle_ad'>
                <img className='widgets_wr_middle_ad_img' src ={process.env.PUBLIC_URL + '/assets/pub.png'} alt=""/>
                <span>
                    {/* <b>Amina Elk</b> et <b>3 autres</b> murissent */}
                </span>
            </div>
            <div className='widgets_wr_bottom_onlinef'>
                <h4>Online friends</h4>
                <ul className='widgets_wr_bottom_listf'>
                {Users.map(u=>(
                    <Online key={u.id} user={u}/>
                ) 
                )}
                </ul>
            </div>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
        <div className="follow">
        {user.username !== currentUser.username && (
          <IconButton className="followButton" onClick={handleClick}>
            {!followed ? "UnFollow" : "Follow"}
            {!followed ? <RemoveCircleIcon/> : <AddCircleIcon/> }
          </IconButton>
        )}
        </div>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship === 0 ? "Married" : user.relationship === 1 ? "Signe" : "-" }</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
         {friends.map(friend =>(
           <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>

          <div className="rightbarFollowing">
            <img
              src={friend.profilePicture ? PF+friend.profilePicture : PF + "noAvatar.png"}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>
           </Link>
         ))}
          
        </div>
      </>
        )
    }
    return (
        <div className='widgets'>
            <div className='widgets_wrapper'>
            {user? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
    )
}

export default Widgets
