import React from 'react';

export default class StatusFilter extends React.Component {
    render() {
        const {displayAll, displayActive, displayDone} = this.props;
        return (
            <div className="buttons">
                <button 
                className="btn btn-primary"
                onClick={displayAll}>All</button>
                <button 
                className="btn btn-danger"
                onClick={displayActive}>Active</button>
                <button 
                className="btn btn-success"
                onClick={displayDone}>Done</button>
            </div>
        )
    }
}