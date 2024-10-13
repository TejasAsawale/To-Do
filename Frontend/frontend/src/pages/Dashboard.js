import React from 'react';
import TaskCard from '../components/TaskCard';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const tasks = [
        {
        id: 1,
        title: "Attend Nischal's Birthday Party",
        priority: "Moderate",
        status: "Not Started",
        dueDate: "20/06/2023",
        imageUrl: "https://via.placeholder.com/100"
        },
        {
        id: 2,
        title: "Landing Page Design for TravelDays",
        priority: "Moderate",
        status: "In Progress",
        dueDate: "20/06/2023",
        imageUrl: "https://via.placeholder.com/100"
        },
        {
        id: 3,
        title: "Presentation on Final Product",
        priority: "Moderate",
        status: "In Progress",
        dueDate: "19/06/2023",
        imageUrl: "https://via.placeholder.com/100"
        }
    ];

    const completedTasks = [
        { id: 4, title: "Walk the dog", status: "Completed", completedOn: "2 days ago", imageUrl: "https://via.placeholder.com/100" },
        { id: 5, title: "Conduct meeting", status: "Completed", completedOn: "2 days ago", imageUrl: "https://via.placeholder.com/100" }
    ];

    return (
        <div className="dashboard">
        <h2>Welcome back, Sundar 👋</h2>
        <div className="task-section">
            <div className="to-do">
            <h3>To-Do</h3>
            {tasks.map(task => <TaskCard key={task.id} task={task} />)}
            </div>
            <div className="stats">
            <h3>Task Status</h3>
            <div className="stats-circle">
                <div className="stat">
                <h4>Completed</h4>
                <p>84%</p>
                </div>
                <div className="stat">
                <h4>In Progress</h4>
                <p>46%</p>
                </div>
                <div className="stat">
                <h4>Not Started</h4>
                <p>13%</p>
                </div>
            </div>
            <h3>Completed Tasks</h3>
            {completedTasks.map(task => <TaskCard key={task.id} task={task} />)}
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
