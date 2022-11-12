
import './index.css'; 
import React from 'react';
import {useState} from 'react';
import TodoList, {addTodo} from './TodoList';
import TodoForm from './TodoForm';
import Todo from './Todo';


function App() {
  
    

    
  return (
   <div className='todoo'>
    <header>
      <h1 className="title">Количество задач №{TodoList} </h1>
    </header>
    <TodoList/>
   </div>
  );
}

export default App;
