import React from 'react';
import '../styles/TaskList.css';

const TaskList = () => {
    const tasks = [
        { id: 1, title: "Attend Nischal's Birthday Party", priority: 'Moderate', status: 'Not Started', dueDate: '20 June' },
        { id: 2, title: 'Landing Page Design for TravelDays', priority: 'Moderate', status: 'In Progress', dueDate: '20 June' },
        { id: 3, title: 'Presentation on Final Product', priority: 'Moderate', status: 'In Progress', dueDate: '19 June' }
    ];

    return (
        <div className="task-list">
        <h2>To-Do</h2>
        <ul>
            {tasks.map(task => (
            <li key={task.id} className="task-card">
                <h3>{task.title}</h3>
                <p>Priority: {task.priority}</p>
                <p>Status: {task.status}</p>
                <p>Due Date: {task.dueDate}</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TaskList;
