const Task = require("../models/Task");

exports.addTask = async (req, res) => {
    const { title, description, dueDate, priority, category } = req.body;
    try {
        const newTask = new Task({ title, description, dueDate, priority, category, collaborators: [req.user.id] });
        const task = await newTask.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).send("Server error");
    }
    };

    exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ collaborators: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).send("Server error");
    }
};
