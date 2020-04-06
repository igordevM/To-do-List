import React from 'react';
import './search.css';
import StatusFilter from './status-filter.js';

export default class Search extends React.Component {
    
    state = {
        label: ''
    }

    submit = (event) => {
        event.preventDefault();
        this.props.searchLabel(this.state.label);
        this.setState({
            label: ''
        })
    }

    onChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    render() {
        const { displayAll, displayActive, displayDone } = this.props;
        return (
            <div className="search">
                <form 
                onSubmit={this.submit}>
                    <input 
                    placeholder="search" 
                    className="search-inp"
                    onChange={this.onChange}
                    value={this.state.label}>
                    </input>
                </form>
                <StatusFilter 
                displayAll={displayAll}
                displayActive={displayActive}
                displayDone={displayDone}/>
            </div>
            
        );
    }
};

