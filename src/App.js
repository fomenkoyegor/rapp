import React, {useState, useEffect} from 'react';
import TodosList from "./TodosList";

function App() {
    const text = 'hello react';
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos') || [];
        setTodos(JSON.parse(savedTodos));
    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    const addTodo = event => {
        if (event.key === 'Enter') {
            setTodos([...todos, {
                id: Date.now(),
                title,
                completed: false,
                userId: 1
            }]);
            setTitle('');
        }
    };
    return (
        <div className="App">
            <h1>{text}</h1>
            <div className="add-todo">
                <input type="text"
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       onKeyPress={addTodo}
                />
            </div>
            <hr/>
            <TodosList todos={todos}/>
        </div>
    );
}

export default App;
