import React, { useEffect, useState } from "react"

const ListTasks = () => {

    const [tasks, setTasks] = useState([])
    const getTasks = async() => {
        try {

            const response = await fetch("http://localhost:5000/tasks")
            const jsonData = await response.json();

            setTasks(jsonData); 

        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteTask = async(id) => {
        try {
            const deleteTask = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "DELETE"
            });

            setTasks(tasks.filter(task => task.task_id !== id))

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <table class="table table-hover mt-5 text-center" >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                    {
                        tasks.map(task => (
                            <tr key={task.task_id}>
                                <td>{task.description}</td>
                                <td><button>Edit</button></td>
                                <td>
                                    <button className="btn btn-danger" 
                                        onClick={() => deleteTask (task.task_id)}>
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListTasks;