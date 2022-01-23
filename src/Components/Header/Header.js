import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
//import shareader from "/"
//import { useStateValue } from './StateProvider';


function Header() {
    //const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <div className = 'header__left__info'>
                    <img src={process.env.PUBLIC_URL + '/assets/shareader.png'} alt=""/>                    
                    <h4 header__left__title>Shareader</h4>
                </div>
            </div>
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
                <div className="header__right__info">
                    <Avatar src=""/>
                    {/* <Avatar src={user.photoURL}/> */}
                    <h4>Amina</h4>
                    {/* <h4>{user.displayName}</h4> */}
                    </div>
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
                </div>
            </div>
    )
}

export default Header;
