import React, {useState} from "react"

const EditTask = ({task, getTasks}) => {
    const [description, setDescription] = useState(task.description);

    const updateDescription = async(e) => {
        e.preventDefault(); 
        try {
            const body = { description };
            const response = await fetch(`https://full-stack-app-task-management.onrender.com/tasks/${task.task_id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(body)
            });
            getTasks(); 
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${task.task_id}`}>
            Edit Task
            </button>

            <div class="modal" id={`id${task.task_id}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit Task</h4>
                    <button type="button" class="close" data-dismiss="modal" onClick={ () => setDescription(task.description)}>&times;</button>
                </div>

                <div class="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(task.description)}>Close</button>
                </div>

                </div>
            </div>
            </div>
        
        </>
    )
}

export default EditTask