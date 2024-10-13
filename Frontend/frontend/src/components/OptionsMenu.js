import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/OptionsMenu.css'; 

const OptionsMenu = () => {
    const [selectedOption, setSelectedOption] = useState('Dashboard');

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="options-menu">
        <ul>
            <li>
            <Link
                to="/"
                className={selectedOption === 'Dashboard' ? 'active' : ''}
                onClick={() => handleClick('Dashboard')}
            >
                Dashboard
            </Link>
            </li>
            <li>
            <Link
                to="/vital-task"
                className={selectedOption === 'Vital Task' ? 'active' : ''}
                onClick={() => handleClick('Vital Task')}
            >
                Vital Task
            </Link>
            </li>
            <li>
            <Link
                to="/my-task"
                className={selectedOption === 'My Task' ? 'active' : ''}
                onClick={() => handleClick('My Task')}
            >
                My Task
            </Link>
            </li>
            <li>
            <Link
                to="/task-categories"
                className={selectedOption === 'Task Categories' ? 'active' : ''}
                onClick={() => handleClick('Task Categories')}
            >
                Task Categories
            </Link>
            </li>
            <li>
            <Link
                to="/settings"
                className={selectedOption === 'Settings' ? 'active' : ''}
                onClick={() => handleClick('Settings')}
            >
                Settings
            </Link>
            </li>
            <li>
            <Link
                to="/help"
                className={selectedOption === 'Help' ? 'active' : ''}
                onClick={() => handleClick('Help')}
            >
                Help
            </Link>
            </li>
        </ul>
        </div>
    );
};

export default OptionsMenu;
