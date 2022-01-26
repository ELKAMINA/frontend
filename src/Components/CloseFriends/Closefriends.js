import "./Closefriends.css"

import React from 'react';

function Closefriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (<div className="sidebar__bottom_sidebarFriend">
    <li>
        <img className="sidebar__bottom_sideFriendImg" src={PF+"noAvatar.png"} alt=""/>
        <span className='sidebarFriendName'>{user.username}</span>
    </li>
  </div>);
}

export default Closefriends;
