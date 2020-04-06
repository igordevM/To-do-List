import React from 'react';
import './todo-list-item.css';


export default class TodoListItem extends React.Component {

    render() {
        const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = this.props;

        let classNames = 'todo-list-item unselectable';

        if (important) {
            classNames += ' important';
        }
        
        if (done === true) {
            classNames += ' done';

        }

        return(
            <div className={classNames}>
                <span 
                className="todo-list-item"
                onClick={onToggleDone}>
                    {label}
                </span>
                <div>
                    <button 
                    className="btn btn-outline-danger"
                    onClick={onDeleted}> 
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button 
                    className="btn btn-outline-success"
                    onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
                
            </div> 
        );
    };
    

} 





 