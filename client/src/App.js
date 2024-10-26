import React from 'react';
import './App.css';

import InputTask from "./components/InputTask";
import ListTasks from './components/ListTask';

function App() {
  return (
    <div className='container'>
      <InputTask/>
      <ListTasks/>
    </div>
  );
}

export default App;
