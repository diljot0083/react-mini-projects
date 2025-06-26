import { useState } from "react"

const TodoInput = ({ addTodo }) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} >

            <input
                type="text"
                placeholder="What do you want to do today?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit" >Add</button>


        </form>
    )
}

export default TodoInput