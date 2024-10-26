import React from "react";
import { useState } from "react";

const InputTask = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("https://full-stack-app-task-management.onrender.com/tasks", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
    <>
        <h1 className="text-center mt-5">Task Management</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
                className="form-control" 
                type="text"
                value={ description }
                onChange = {e => setDescription(e.target.value)}
            />
            <button class="btn btn-success">Add</button>
        </form>
    </>
)
    
}

export default InputTask;