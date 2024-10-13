import React from 'react';
import '../styles/TaskCard.css';

const TaskCard = ({ task }) => {
    return (
        <div className="task-card">
        <h3>{task.title}</h3>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
        </div>
    );
};

export default TaskCard;
