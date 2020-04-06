import React from 'react';

import './add-item.css';

export default class AddItem extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value 
        });
    }

    onSubmit = (event) => {
        event.preventDefault();  
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    

    render() {
        return (
            <form 
            className="add-item"
            onSubmit={this.onSubmit}>
                <input 
                type="text"
                className="add-form form-control"
                onChange={this.onLabelChange}
                placeholder="Change Biba on Boba"
                value={this.state.label}></input>
                <button 
                className="add-btn btn btn-outline-secondary">Add Item</button>
            </form>    
        )
    }
}