const Task = require("../models/Task");

// exports.addTask = async (req, res) => {
//     const { title, description, dueDate, priority, category } = req.body;
//     try {
//         const newTask = new Task({ title, description, dueDate, priority, category, collaborators: [req.user.id] });
//         const task = await newTask.save();
//         res.status(201).json(task);
//     } catch (err) {
//         res.status(500).send("Server error");
//     }
//     };

async function CreateTask(req, res) {
    console.log('Request Body:', req.body); // Log the request body
    console.log('Uploaded file:', req.file); // Log the uploaded file

    const { title, date, priority, taskDescription } = req.body;

    // Check for required fields
    if (!title || !date || !priority || !taskDescription) {
        return res.status(400).json({
            status: false,
            message: 'All fields are required: title, date, priority, taskDescription'
        });
    }

    // Validate priority value
    const validPriorities = ['extreme', 'moderate', 'low'];
    if (!validPriorities.includes(priority)) {
        return res.status(400).json({
            status: false,
            message: 'Invalid priority value. Expected: extreme, moderate, low'
        });
    }

    // Validate date format
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({
            status: false,
            message: 'Invalid date format. Expected format: YYYY-MM-DD'
        });
    }

    try {
        const image = req.file ? req.file.path : null;

        const task = new Task({
            title,
            date: parsedDate,
            priority,
            taskDescription,
            image,
            createdBy: req.user.id
        });

        const savedTask = await task.save();
        res.status(201).json({
            status: true,
            message: 'Task created successfully',
            data: savedTask
        });
    } catch (error) {
        console.error('Task creation error:', error);
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
}

// exports.getTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({ collaborators: req.user.id });
//         res.json(tasks);
//     } catch (err) {
//         res.status(500).send("Server error");
//     }
// };

Module.exports = {
    CreateTask
}