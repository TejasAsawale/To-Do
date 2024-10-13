import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Dashboard from './pages/Dashboard';
import VitalTask from './pages/VitalTask';
import MyTask from './pages/MyTask';
import TaskCategories from './components/TaskCategories'; 
import Settings from './pages/Settings';
import Help from './components/Help'; 
import OptionsMenu from './components/OptionsMenu'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <OptionsMenu />
        <div className="content">
          <h1>Your Dashboard</h1>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vital-task" element={<VitalTask />} />
            <Route path="/my-task" element={<MyTask />} />
            <Route path="/task-categories" element={<TaskCategories />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
