// src/components/TaskManager.js

import React, { useEffect, useState } from "react";
import InputTask from './InputTask';
import DeleteTasks from './DeleteTask';
import EditTask from "./EditTask";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    // Function to fetch tasks
    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:5000/tasks");
            const jsonData = await response.json();
            setTasks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    // Fetch tasks when the component mounts
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <InputTask getTasks={getTasks} />
            <DeleteTasks tasks={tasks} getTasks={getTasks} />
        </>
    );
};

export default TaskManager;
