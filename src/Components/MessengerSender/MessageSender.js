// import React, {useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import axiosInstance from "../../config";


function MessageSender() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [input, setInput] = useState("")
    const handleSubmit = async (e)=> {
        e.preventDefault()
        const newPost = {
            userId : user._id,
            desc : desc.current.value,
        }
        await axiosInstance.post("/post", newPost)
        .catch(err =>{
            console.log(err)
        })
        setInput("");
        window.location.reload()
        }

    return (
        <div className = "MessageSender">
            <div className="MessageSender__top">
                <Avatar src={PF+"noAvatar.png"}/>
                <form >
                    <input 
                    value = {input}
                    onChange={(e)=> setInput(e.target.value)}
                    className="MessageSender__input" placeholder={"What's on your mind "+ user.username + "?"}
                    aria-label="fullname"
                    ref={desc}
                    />
                    <button onClick= {handleSubmit} type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="MessageSender__bottom">
                <div className="MessageSender__options">
                    <VideocamIcon style={{color : "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="MessageSender__options">
                    <PhotoLibraryIcon style={{color : "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="MessageSender__options">
                    <InsertEmoticonIcon style={{color : "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
