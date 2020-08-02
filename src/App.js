//
import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from "firebase"


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  // when the app loads, we need to listen to the db and fetch new todos as they get added/removed
  useEffect(() => {
    // this code fires when the app.js loads
   
    db.collection('todos').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo: doc.data().todo})))
    })
    }, []);
  
  
  //console.log('YOOO', input)̥

  const addTodo = (event) => {
    // this fires up when we click the button
    event.preventDefault(); // stop the refresh after form submit
    
    db.collection('todos').add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // clears the input bar after submit

  }

  return (
    <div className="App">
      <h1>Hello World!</h1>    

      <form>
  
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
    
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
          {/* <button disabled={!input} type="submit" onClick={addTodo}>Add Todo</button> */}
        
      </form>
      
      <ul>
        {todos.map(todo =>
           <Todo todo={todo}/> 
        )}
      </ul>
          
    </div>
  );
}

export default App;
