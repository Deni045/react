import React, {useState} from "react";
import TodoForm from "./TodoForm";
import remove from '../src/static/img/remove.png'

function Todo({todos, completeTodo, removeTodo}){

    return todos.map((todo, index) => (
    <div 
    className={todo.Complete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
        
    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
    </div>

    <div className="icons">
        <img src={remove} alt="X" 
        onClick={() => removeTodo(todo.id)}
        className='delete'
        />
    </div>

    </div>
    ));
    
}

export default Todo