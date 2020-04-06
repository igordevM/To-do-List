import React from 'react';
import TodoListItem from './todo-list-item/todo-list-item';
import './todo-list.css';


const ToDoList = ({ items, onDeleted, onToggleDone, onToggleImportant }) => {
    
    const newItems = items.filter((el) => el.display);
    const elements = newItems.map((el) => {

        const { id, ...itemProps } = el; 

        return(
            <li key={id} className="list-group-item">
                <TodoListItem 
                    { ... itemProps}
                    onDeleted={() => onDeleted(id)} 
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>  
        );
    });

    return (
        <ul className="list-group todo-list"> 
            {elements}        
        </ul>
    );
};


export default ToDoList;