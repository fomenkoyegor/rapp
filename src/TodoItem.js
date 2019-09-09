import React, {useContext} from 'react';
import {Context} from './context';

function TodoItem({todo}) {
    const {dispatch} = useContext(Context);
    const {id, title, completed} = todo;
    const cls = ['todo__item'];
    if (completed) {
        cls.push('todo__item-completed');
    }
    return (
        <li className={cls.join(' ')}>
            <label>
                <input type="checkbox"
                       checked={completed}
                       onChange={() => dispatch({
                           type: 'toggle',
                           payload: id
                       })}
                />
                <span className="todo__title">
                {title}
                </span>
                <button onClick={() => dispatch({
                    type: 'remove',
                    payload: id
                })}>
                    del
                </button>
            </label>

        </li>
    )
}

export default TodoItem;
