import EditTask from './EditTask';

const ListTasks = ({ tasks, getTasks }) => {

    const deleteTask = async(id) => {
        try {
            const deleteTask = await fetch(`https://full-stack-app-task-management.onrender.com/tasks/${id}`, {
                method: "DELETE"
            });
            getTasks();
        } catch (err) {
            console.error(err.message);
        }
    }


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
                    {
                        tasks.map(task => (
                            <tr key={task.task_id}>
                                <td>{task.description}</td>
                                <td><EditTask task={task} getTasks={getTasks}/></td>
                                <td>
                                    <button className="btn btn-danger" 
                                        onClick={() => deleteTask (task.task_id)}>
                                            Delete Task
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