import React from 'react';

import FlipMove from 'react-flip-move';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class TodoList extends React.Component {
    render() {
        let items = this.props.items;
        const listItems = items.map(item => {
            return <li key={item.key}>
                {item.text}
                <span
                    onClick={() => this.props.handleDelete(item.key)}>
                    <FontAwesomeIcon className="trash" icon={faTrashAlt} />
                </span>
            </li>
        })
        return (
            <ul>
                <FlipMove duration={300} easing="ease-in-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoList;