import { useState } from "react";

const InputTodo = (prop) => {
    const {addTodoItem} = prop;

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim()) {
        addTodoItem(title);
        setTitle('');
        setMessage('');
        }
        else {
            setMessage('Please add item.');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                type="text" 
                placeholder="Add to do ... "
                value={ title} 
                onChange={handleChange} 
                className="input-text" />
                <button type="submit" className="input-submit">Submit </button>
          </form>
          <span className="submit-warning">{message}</span>
        </>
    )
}

export default InputTodo;