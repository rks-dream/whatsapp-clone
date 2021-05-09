import React from 'react';
import './Sidebar.css';
import {IconButton,Avatar} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import SearchOutlined from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Sidebarchat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/61194112?s=400&u=1129cc0af63e3a24e3d6b96d26d5bfbf8ce33bf4&v=4"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="search or start new chat" />
                </div>
            </div>

            <div className="sidebar__chats">
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />
                <Sidebarchat />
            </div>
        </div>
    );
}

export default Sidebar
