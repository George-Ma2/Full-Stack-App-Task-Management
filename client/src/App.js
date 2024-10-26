import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Authentication from './components/Authentication';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
