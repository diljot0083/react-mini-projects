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

    const addTodo = (text) => {

        const newTodo = { id: Date.now(), text, complete: false };
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, complete: !todo.complete } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div>
            <TodoInput addTodo={addTodo} />

            <div className="todo-list">
                {todos.map((todo) => (
                    <div key={todo.id} className="todo-item">

                        <input type="checkbox"
                            checked={todo.complete}
                            onChange={() => toggleTodo(todo.id)}
                        />

                        <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
                            {todo.text}
                        </span>

                        <button
                            className="delete-button"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            ✖
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TodoList
