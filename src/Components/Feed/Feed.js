// import React, { useState } from 'react';
// import { useEffect } from 'react';
import './Feed.css';
import MessageSender from '../MessengerSender/MessageSender';
import Post from '../Posts/Post';
import {Posts} from '../../dummyData';

function Feed() {
// const [posts, setPosts]= useState([]);
// useEffect(() => {
//     db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
//     setPosts(snapshot.docs.map((doc) => ({ id : doc.id, data: doc.data() }))
//     ))
// }, [])
    return (
        <div className = "feed">
            {/* MessageSender */}
            <MessageSender />
            {/* Post */}
            {Posts.map((post) => (
                <Post 
                key={post.id}
                // profilePic={post.data.profilePic}
                // message={post.data.message}
                // timestamp={post.data.timestamp}
                // username={post.data.username}
                // image={post.data.image}
                post={post}
                />
            ))}
        </div>
    )
}
export default Feed;
