import React from "react";
import {Button, Form} from "react-bootstrap";

function TaskList({taskList, setTaskList}) {

    const deleteItem = (id) => {
        const newList = [...taskList].filter(item => item.id !== id);
        setTaskList(newList);
        localStorage.setItem('savedList', JSON.stringify(newList));
    }

    const changeStatus = (id) => {
        const newList = taskList.map(item => {
            if (item.id === id) {
                return {...item, status: !item.status};
            }
            return item;
        });
        setTaskList(newList);
        localStorage.setItem('savedList', JSON.stringify(newList));
    }

    return (
        <div>
            {
                taskList.map(item => (
                    <div key={item.id} className='listItems'>
                        <div className='item'>
                            <Form.Check
                                checked={item.status}
                                aria-label="option 1"
                                onClick={() => changeStatus(item.id)}
                            />
                            <div className={item.status ? 'incomplete-item' : 'item'}>{item.title}</div>
                        </div>
                        <Button onClick={() => deleteItem(item.id)}>&times;</Button>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList;