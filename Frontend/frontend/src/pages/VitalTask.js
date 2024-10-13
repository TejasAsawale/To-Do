import React from 'react';
import TaskCard from '../components/TaskCard'; 

const VitalTask = () => {
    const vitalTasks = [
        {
        id: 1,
        title: "Critical Task 1",
        priority: "High",
        status: "In Progress",
        },
        {
        id: 2,
        title: "Critical Task 2",
        priority: "High",
        status: "Not Started",
        },
    ];

    return (
        <div>
        <h2>Vital Tasks</h2>
        {vitalTasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
        </div>
    );
};

export default VitalTask;
