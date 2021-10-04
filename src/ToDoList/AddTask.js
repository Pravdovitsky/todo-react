import React, {useState} from "react";
import {Row, Col, Button, FormControl} from "react-bootstrap";

function AddTask({taskList, setTaskList}) {
    const [value, setValue] = useState('');

    const addToList = () => {
        if (value.trim()) {
            const newTaskList = [...taskList, {
                id: taskList.length + 1,
                title: value,
                status: false
            }];
                setTaskList(newTaskList);
            localStorage.setItem('savedList', JSON.stringify(newTaskList));
            setValue('');
        } else {
            alert('Заполните поле задачи!!!');
        }
    }

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            addToList();
        }
    }

    return (
        <Row>
            <Col className='add-size'>
                <FormControl
                    placeholder='Новая задача'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={keyPress}
                />
                <Button variant="info" onClick={addToList}>Добавить</Button>
            </Col>
        </Row>
    )
}

export default AddTask;