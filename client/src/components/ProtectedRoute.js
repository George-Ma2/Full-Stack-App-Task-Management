import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return element
    // return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;