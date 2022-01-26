import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import './Feed.css';
import MessageSender from '../MessengerSender/MessageSender';
import Post from '../Posts/Post';
import { AuthContext } from "../../context/AuthContext";
import {axiosInstance } from '../../config';

function Feed({username}) {
const [posts, setPosts]= useState([]);
const {user} = useContext(AuthContext)
useEffect(() => {
    const fetchPosts = async()=>{
        const res = username 
            ? await axiosInstance.get("/post/profile/" + username)
            : await axiosInstance.get("/post/timeline/" + user._id)
        // .catch(err => {
        //     res.status(500).json(err)
        // })
        setPosts(res.data.sort((p1,p2)=>{
            return new Date (p2.createdAt) - new Date(p1.createdAt)
        }))
    }
    fetchPosts();
}, [username, user._id])

    return (
        <div className = "feed">
            {/* MessageSender */}
           {(!username || username === user.username) && <MessageSender />}
            {/* Post */}
            {posts.map((post) => (
                <Post 
                key={post._id}
                post={post}
                />
            ))}
        </div>
    )
}
export default Feed;
