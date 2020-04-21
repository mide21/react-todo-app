import React from 'react';

import './css/bootstrap.min.css';
import './css/index.css';

import TodoList from './component/todo-list';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            });
        }

    }

    handleDelete(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key)
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="box">
                        <header>
                            <div className="top-header">
                                <h2>My Todo List</h2>
                                <form id="to-do-form" onSubmit={this.handleSubmit}>
                                    <input type="text" placeholder="What to do ........"
                                        onChange={this.handleChange}
                                        value={this.state.currentItem.text} />
                                    <button type="submit">
                                        Add
                        </button>
                                </form>
                            </div>
                            <TodoList handleDelete={this.handleDelete} items={this.state.items}></TodoList>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;