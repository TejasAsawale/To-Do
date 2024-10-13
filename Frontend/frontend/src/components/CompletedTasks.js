import React from 'react';
import '../styles/CompletedTasks.css';

const CompletedTasks = () => {
    const completedTasks = [
        { id: 1, title: 'Walk the dog', status: 'Completed', dueDate: '2 days ago' },
        { id: 2, title: 'Conduct meeting', status: 'Completed', dueDate: '2 days ago' },
    ];

    return (
        <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <ul>
            {completedTasks.map(task => (
            <li key={task.id} className="task-card">
                <h3>{task.title}</h3>
                <p>Status: {task.status}</p>
                <p>Completed: {task.dueDate}</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default CompletedTasks;
