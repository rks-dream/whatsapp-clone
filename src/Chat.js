import React from 'react';
import './Chat.css';
import {IconButton,Avatar} from '@material-ui/core';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Family</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sakina</span>
                    Hum aapse beintehaan mohabbat krte h
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Mummy</span>
                    Sakina meri bahu bnegi
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message  chat__receiver">
                    <span className="chat__name">Rahul</span>
                    Ha, mummy..jarur
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
