import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/AuthContext';
import { useContext } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
//import Amina from "../../../public/assets/Amina.PNG"
//import { useStateValue } from './StateProvider';


function Header() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const handleClick = ()=>{
        window.localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="header">
        <Link to="/" style={{textDecoration: "none"}}>
             <div className="header__left">
                <div className = "header__left__info">
                    <img src={PF+"shareader.png"} alt=""/>                    
                    <h4 className="header__left__title">Shareader</h4>
                </div>
             </div>
                </Link>
            {/* *************************************************** */}
            <div className="header__middle">
                <div className="header__options header__options--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <img src="" alt=""/>
                <div className = 'header__input'>
                    <SearchIcon/>
                    <input placeholder = "Search" type='text'/>
                </div>
            </div>
          {/* *************************************************** */}
            <div className="header__right">
                <Link to={"/profile/" + user.username}>
                     <div className="header__right__info">
                        <Avatar src={user.profilePicture ? PF+ user.profilePicture : PF+"noAvatar.png" }/>
                        {/* <Avatar src={user.photoURL}/> */}
                        {/* <h4>{user.username}</h4> */}
                        <h4>{user.username}</h4>
                        {/* <h4>{user.displayName}</h4> */}
                    </div>
                </Link>
                    <div className="header__right__info  header__right__info--active">
                    <IconButton>
                        <PersonAddIcon fontSize='large'/>
                        <span className="header_right_badge">1</span>
                    </IconButton>
                    </div>
                    <div className="header__right__info">
                    <IconButton>
                        <ForumIcon fontSize='large'/>
                        <span className="header_right_badge">1</span>  
                    </IconButton>
                    </div>
                    <div className="header__right__info">
                    <IconButton>
                         <NotificationsActiveIcon fontSize='large'/>
                         <span className="header_right_badge">1</span>
                    </IconButton>  
                    </div>
                    <IconButton onClick={handleClick}>
                         <LogoutIcon fontSize='large' />
                    </IconButton>  
                    </div>
                </div>
    )
}

export default Header;
