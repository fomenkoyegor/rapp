import React, {useState} from 'react';

function TodoItem({todo}) {
    const {title, completed} = todo;
    const [cheked, setCheked] = useState(completed);
    const cls = ['todo__item'];
    if (cheked) {
        cls.push('todo__item-completed');
    }
    return (
        <li className={cls.join(' ')}>
            <label>
                <input type="checkbox"
                       checked={cheked}
                       onChange={()=>setCheked(!cheked)}
                />
                <span className="todo__title">
                {title}
            </span>
                <button>del</button>
            </label>

        </li>
    )
}

export default TodoItem;
