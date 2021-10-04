import React, {useState} from 'react';
import AddTask from "./ToDoList/AddTask";
import TaskList from "./ToDoList/TaskList";
import {Container} from "react-bootstrap";

function App() {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('savedList')) || []);

    return (
        <Container className = "container">
            <Container className = 'header'>Список дел</Container>
            <AddTask taskList = {taskList} setTaskList = {setTaskList}/>
            <TaskList taskList = {taskList} setTaskList = {setTaskList}/>
        </Container>
    );
}

export default App;
