import React from "react";
import { Link } from "react-router-dom";

const Authentication = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to the Task Management App</h1>
            <h3>Please choose an option:</h3>
            <div className="mt-4">
                <Link to="/signin" className="btn btn-primary mx-2">
                    Sign In
                </Link>
                <Link to="/login" className="btn btn-secondary mx-2">
                    Log In
                </Link>
            </div>
        </div>
    );
};

export default Authentication;
