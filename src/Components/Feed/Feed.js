// import React, { useState } from 'react';
// import { useEffect } from 'react';
import './Feed.css';
import MessageSender from '../MessengerSender/MessageSender';
import Post from '../Posts/Post';

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
            <Post />
            {/* Post */}
            {/* {posts.map((post) => (
                <Post 
                // key={post.id}
                // profilePic={post.data.profilePic}
                // message={post.data.message}
                // timestamp={post.data.timestamp}
                // username={post.data.username}
                // image={post.data.image}
                /> */}
        </div>
            )
}

export default Feed;
