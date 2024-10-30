// src/components/TaskManager.js

import React, { useEffect, useState } from "react";
import InputTask from './InputTask';
import DeleteTasks from './DeleteTask';
import EditTask from "./EditTask";
import LogOut from "./LogOut";

const TaskManager = ({ setIsAuthenticated }) => {
    const [tasks, setTasks] = useState([]);

    // Function to fetch tasks
    const getTasks = async () => {
        try {
            const response = await fetch("https://full-stack-app-task-management.onrender.com/tasks");
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
            <LogOut setIsAuthenticated={setIsAuthenticated} />
            <InputTask getTasks={getTasks} />
            <DeleteTasks tasks={tasks} getTasks={getTasks} />
        </>
    );
};

export default TaskManager;
