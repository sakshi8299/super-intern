import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import "../style/Post.css";

import Comments from './Comments';


function Post() {
  return (
    <div className="post">
      
        <div className="post__header">
        <ListItem>
                    <ListItemAvatar>
                        <Avatar className="post__avatar" src="https://source.unsplash.com/random" alt="User" />
                    </ListItemAvatar>
                    <ListItemText primary="curicity" secondary="Milkcow Canada" />
                </ListItem>
                <img
                    className="post__image"
                    src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                    alt="Post pic"
                />
                <h4 className="post__text"><strong>curicity: </strong>happy to see you there😍😘🤩</h4> 
             
                <div className="post__comments">
                    <Comments/>
                  
                </div>
            
        </div>
        </div>
  )
}

export default Post