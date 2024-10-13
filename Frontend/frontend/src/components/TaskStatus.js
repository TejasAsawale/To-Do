import React from 'react';
import '../styles/TaskStatus.css';

const TaskStatus = () => {
    return (
        <div className="task-status">
        <h2>Task Status</h2>
        <div className="status-charts">
            <div>
            <p>84%</p>
            <span>Completed</span>
            </div>
            <div>
            <p>46%</p>
            <span>In Progress</span>
            </div>
            <div>
            <p>13%</p>
            <span>Not Started</span>
            </div>
        </div>
        </div>
    );
};

export default TaskStatus;
