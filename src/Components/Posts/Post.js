import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import "./Post.css";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {ExpandMoreOutlined} from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axiosInstance from "../../config"
import {format} from "timeago.js";
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';


function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setisLiked] = useState(false)
    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)
    useEffect(() => {
        setisLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])
    const likeHandler =  ()=> {
        try {
            axiosInstance.put("/posts/" + post._id + "/like", { userId: currentUser._id });
          } catch (err) {}
          setLike(isLiked ? like - 1 : like + 1);
          setisLiked(!isLiked);
        };
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    useEffect(() => {
        const fetchUser = async()=>{
            const res = await axiosInstance.get("/users?userId=" + post.userId)
            .catch(err => {
                res.status(500).json(err)
            })
            setUser(res.data)
            console.log(res)
        };
        fetchUser();
    }, [post.userId])
    return (
        <div className="post">
        <Link to={"/profile/" + user.username}>
            <div className="post__top">
                <Avatar src={user.profilePicture ? user.profilePicture : PF+"noAvatar.png"} className= "post__avatar"/>
                <div className="post__topInfo">
                    <h3>{user.username}</h3>
                    <p>{format(post.createdAt)}</p>
                </div>
            </div>
        </Link>

            <div className="post__bottom">
                <p>{post?.desc}</p>
            </div>

            <div className="post__image">
                <img src ={PF+post.img} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                <VolunteerActivismIcon onClick={likeHandler}/>
                <p>{like}</p>
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
