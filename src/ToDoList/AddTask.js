import React, {useState, useCallback} from "react";
import {Row, Col, Button, FormControl} from "react-bootstrap";

function AddTask({taskList, setTaskList}) {
    const [value, setValue] = useState('');

    const handleAdd = useCallback(
        () => {
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
        }, [value]
    )

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                handleAdd();
            }
        }, [value])

    const getInputValue = useCallback(
        (e) => setValue(e.target.value),
        [value]
    )

    return (
        <Row>
            <Col className='add-size'>
                <FormControl
                    placeholder='Новая задача'
                    value={value}
                    onChange={getInputValue}
                    onKeyDown={keyPress}
                />
                <Button variant="info" onClick={handleAdd}>Добавить</Button>
            </Col>
        </Row>
    )
}

export default AddTask;
