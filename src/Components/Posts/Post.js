import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {ExpandMoreOutlined} from '@material-ui/icons';


function Post({post}) {
    console.log(post.photo);
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src="" className= "post__avatar"/>
                <div className="post__topInfo">
                    <h3>username</h3>
                    <p>{post.date}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{post?.desc}</p>
            </div>

            <div className="post__image">
                <img src ={post.photo} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                <VolunteerActivismIcon/>
                <p>Give</p>
                </div>
                <div className="post__option">
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
                </div>
                <div className="post__option">
                <NearMeIcon/>
                <p>Share</p>
                </div>
                <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreOutlined />

                </div>

            </div>
            
        </div>
    )
}

export default Post
