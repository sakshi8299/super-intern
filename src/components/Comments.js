import React, { useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@mui/icons-material/Send';
import "../style/Post.css";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '70ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

function Comments() {

  //GET REQUEST
  const [data,setData]=useState([]);

  const url="https://jsonplaceholder.typicode.com/posts"
     const classes = useStyles();
  useEffect(()=>{
    fetch(url)
    .then(response=>response.json()).then(json=>{
      console.log("jasonnnn",json)
      setData(json)
    }).catch(e=>{
      console.log("e",e)
    })
  },[])

  //POST REQUEST
 const [body,setBody]=useState("");
 function saveBody()
 {
  let data={body}
 

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    }).then((result)=>{
      result.json().then((resp)=>{
         console.warn(resp)
      }
      )
    }
    )
  })
 }

 function deleteuser(id){
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    method:'DELETE'
  })
 }
  return (
    
    <List className={classes.root}>

    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
      </ListItemAvatar>
      <ListItemText
        primary="comments"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
           <form className="post__form">
                    <TextField
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                     label="add comment"
                     size="small"
                     variant="outlined"
                     className="post__input"
                     placeholder="add comment"
                    />
                     <Button
                     onClick={saveBody}
                        variant="contained"
                        size="small"
                        type="submit"
                       
                    > <SendIcon/>
                        Send
                    </Button>
                </form>

  <div className="Comments">
  <table border="0">
       <tbody>
        {
          data.map((item,i)=>
            <tr key={i}>
          <td width="80px">{item.name}</td>
          <td>{item.body}</td>
          <td>
          <Button
              onClick={()=>deleteuser(item.id)
               }
                variant="contained"
                 size="small"
                 type="submit"
                   >
                  Delete
                 </Button>
          </td>
          </tr>
          )
        }
       </tbody>
      </table> 
 
</div>
         </Typography>
        </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />  
  </List>
 
  );
}

export default Comments