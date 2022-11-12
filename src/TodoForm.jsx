import {useState} from 'react';
import plus from '../src/static/img/plus.png'



function TodoForm(props){
    const [input, setInput] = useState("");
    
    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
   };
    
    return (
        <div className="todo-from">
            <form onSubmit={handleSubmit}>

            <button className='todo-button'>+</button>
    
            <input
            type='text'
            placeholder="Новая задача"
            value={input}
            className='todo-input'
            onChange={handleChange}
            />
            </form>
        </div>
       
    )
}

export default TodoForm;