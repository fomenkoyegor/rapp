import React, {useState, useEffect, useReducer} from 'react';
import {Context} from './context';
import TodosList from "./TodosList";
import reduccer from './reduccer';
import {TodoService} from './service';

function App() {
    const text = 'hello react';
    const savedTodos = localStorage.getItem('todos') || [];
    const [state, dispatch] = useReducer(reduccer, JSON.parse(savedTodos));
    const [title, setTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state]);

    useEffect(() => {
        TodoService.getTodos().then(res => console.log(res))
    }, []);

    const addTodo = event => {
        if (event.key === 'Enter') {
            dispatch({
                type: 'add',
                payload: title
            });
            setTitle('');
        }
    };
    return (
        <Context.Provider value={{
            dispatch
        }}>
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
                <TodosList todos={state}/>
            </div>
        </Context.Provider>
    );
}

export default App;
