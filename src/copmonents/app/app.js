import React from 'react';

import AppHeader from '../app-header';
import Search from '../search';
import ToDoList from '../todo-list';
import HowMany from '../how-many';
import AddItem from '../add-item';
import './app.css';


export default class App extends React.Component {

    startId = 1;

    state = {
        todoData: [
            this.createItem('Task 1'),
            this.createItem('Task 2'),
            this.createItem('Task 3'),
            this.createItem('Task 4')
        ]
    };
    

    // TOOLS
    createItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.startId++,
            display: true
        }
    }

    toggleProperty(arr, id, propName) {
        const newArr = arr.map((el) => {
            if (el.id === id) {
                el[propName] = !el[propName];
            };
            return el;
        });
        return newArr;
    }
    
    display(arr, propName) {
        const newArr = arr.map((el) => {
            el.display = true;
           if (!el[propName]) {
               el.display = false;
           }
           return el;
        });
        
        return newArr;
    }
    // END TOOLS



    // ADD TODO ITEM
    addItem = (text) => {        
        const newItem = this.createItem(text);
        
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };
    // END ADD TODO ITEM



    // TODO-LIST
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            let newData = todoData.filter((el) => {
                return !(el.id === id);
            });
           
            return {
                todoData: newData};
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return this.toggleProperty(todoData, id, 'done');
        });
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return this.toggleProperty(todoData, id, 'important');
        });
    }
    // END TODO-LIST


    // SEARCH
    searchLabel = (label) => {
        
        this.setState(({todoData}) => {
            let newArr = todoData.map((el) => {
                el.display = true;
               if (!(el.label.indexOf(label) > -1)) {
                   el.display = false;
               }
               return el;
            });
            return {
                todoData: newArr
                
            };
        })
    }

    displayAll = () => {
        this.setState(({todoData}) => {
            const newArr = todoData.map((el) => {
                el.display = true;
                return el;
            });
            return {
                todoData: newArr
            };
        });
    }

    displayActive = () => {
        this.setState(({todoData}) => {
            return {
                todoData: this.display(todoData, 'important')
            };
        })
    }

    displayDone = () => {
        this.setState(({todoData}) => {
            return {
                todoData: this.display(todoData, 'done')
            };
        })
    }
    // END SEARCH

    render() {
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="container">
                <div className="app">
                    <AppHeader />
                    <HowMany 
                        todo={todoCount}
                        done={doneCount} 
                    /> 
                    <Search 
                        searchLabel={this.searchLabel}
                        displayAll={this.displayAll}
                        displayActive={this.displayActive}
                        displayDone={this.displayDone}
                    />     
                    <ToDoList 
                        items = {this.state.todoData}
                        onDeleted={this.deleteItem} 
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}	
                    />
                    <AddItem onItemAdded={this.addItem}/>
                </div>
            </div>
        
        );  
    }

};