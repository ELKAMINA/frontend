import "./Closefriends.css"

import React from 'react';

function Closefriends({user}) {
  return (<div className="sidebar__bottom_sidebarFriend">
    <li>
        <img className="sidebar__bottom_sideFriendImg" src={user.profilePicture} alt=""/>
        <span className='sidebarFriendName'>{user.username}</span>
    </li>
  </div>);
}

export default Closefriends;
