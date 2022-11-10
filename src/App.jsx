
import './index.css'; 
import React from 'react';
import {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function App() {
  const [todo, setTodo] = useState ([]);

 

  

 // const presshandler = () => {
 //   setNote((prevNote) => {
 //     return prevNote.filter(note => note.id != id)
 //   })
 // }
     
  return (
   <div className='todoo'>
    <header>
      <h1 className="title">Количество задач № 1</h1>
    </header>
    <TodoList/>
   </div>
  );
}

export default App;
