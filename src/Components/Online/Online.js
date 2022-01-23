import React from 'react';
import "./Online.css"

function Online({user}) {
  return (<div  className='widgets_wr_bottom_friend'>
  <li>
      <div className="widgets_wr_bottom_friend_info">
          <img className='widgets_wr_bottom_friend_img' src ={user.profilePicture} alt=""/>
          <span className = "username">
            <b>{user.username}</b>
            </span>
          <span className = "point">
            </span>
      </div>
    </li>
  </div>);
}

export default Online;
