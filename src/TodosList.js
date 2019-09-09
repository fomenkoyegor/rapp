import React from 'react';
import TodoItem from "./TodoItem";

function TodosList({todos}) {
    return(
        <ul className='todo__list'>
            {todos.map(item => <TodoItem key={item.id} todo={item} />)}
        </ul>
    )
}

export default TodosList;
