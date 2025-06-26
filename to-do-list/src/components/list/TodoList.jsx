import { useEffect, useState } from "react"
import TodoInput from "./TodoInput";
const TodoList = () => {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("Task List");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("Task List", JSON.stringify(todos));
    }, [todos]);

    const addtodo = (text) => {

        const newTodo = { id: Date.now(), text, complete: false };
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, complete: !todo.complete } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div>
            <TodoInput addTodo={addtodo} />

            <div className="todo-list">
                {todos.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <input type="checkbox"
                            checked={todo.complete}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TodoList
