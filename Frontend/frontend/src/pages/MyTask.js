import React from 'react';

const MyTask = () => {
    const myTasks = [
        {
        id: 1,
        title: "Prepare Design Proposal",
        status: "Completed",
        priority: "Moderate",
        dueDate: "18/06/2023"
        },
        {
        id: 2,
        title: "Review Team Performance",
        status: "In Progress",
        priority: "Moderate",
        dueDate: "21/06/2023"
        },
        {
        id: 3,
        title: "Team Meeting Preparation",
        status: "Not Started",
        priority: "Low",
        dueDate: "23/06/2023"
        }
    ];

    return (
        <div className="my-task-page">
        <h2>My Tasks</h2>
        <ul className="task-list">
            {myTasks.map(task => (
            <li key={task.id} className="task-card">
                <h3>{task.title}</h3>
                <p>Status: {task.status}</p>
                <p>Priority: {task.priority}</p>
                <p>Due Date: {task.dueDate}</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default MyTask;
