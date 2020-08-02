import React, { useState} from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    
    //const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [input, setInput] = useState('');

    const UpdateTodo = () =>{
        // update todo with new input text

        db.collection('todos').doc(props.todo.id).set({
           todo: input 
        }, { merge: true })
        setOpen(false)
    }

    return (
        <div>
        <Modal open={open} onClose={e=>setOpen(false)}>
            <div className={classes.paper}>
                <h1>Edit Todo</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                <Button onClick={UpdateTodo}>Update Todo</Button>
            </div>    
        </Modal>
        
        <List class="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline: 0:0:00" />
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
            <Button onClick={e => setOpen(true)}>Edit</Button>
        </List>
    </div>
    )
}

export default Todo
