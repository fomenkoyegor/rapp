import React, {useState} from 'react';
import TodosList from "./TodosList";

function App() {
    const text = 'hello react';
    const [todos, setTodos] = useState([
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: true
        },
        {
            userId: 2,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
        },
    ]);
    const [title, setTitle] = useState('');
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
