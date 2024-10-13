import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="profile">
            <img src="https://via.placeholder.com/50" alt="Profile" className="profile-img" />
            <p className="name">Sundar Gurung</p>
            <p className="email">sundargurung360@gmail.com</p>
        </div>
        <nav>
            <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/vital-task">Vital Task</Link></li>
            <li><Link to="/my-task">My Task</Link></li>
            <li><Link to="/task-categories">Task Categories</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
        <div className="logout">
            <Link to="/logout">Logout</Link>
        </div>
        </div>
    );
};

export default Sidebar;
