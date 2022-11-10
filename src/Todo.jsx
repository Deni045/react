import React, {useState} from "react";
import TodoForm from "./TodoForm";
import remove from '../src/static/img/remove.png'

function Todo({todos, completeTodo}){
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    return todos.map((todo, index) => (
    <div 
    className={todo.Complete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
        
    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
    </div>

    <div className="icons">
        <remove/>
    </div>

    </div>
    ));
    
}

export default Todo