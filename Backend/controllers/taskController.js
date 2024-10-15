const mongoose = require("mongoose");
const  taskModel = require("../models/Task");
const PriorityModel = require("../models/Priority");
const UserModel = require("../models/User");

// Add  new task
const addTask = async (req, res) => {
    console.log(req.body);
    const userId = req.user._id;

    const { title, description, priority, taskDate, status} = req.body;

    const allowedPriorities = ["Extreme","Moderate","Low"];

    try {
        if(!allowedPriorities.includes(priority)) {
            return res.status(400).send({message: "Invalid priority value", success: false});
        }

        const existingtask = await taskModel.findOne({
            title,
            priority,
        });
        if(existingtask) {
            return res.status(400).send({ message: "Oops! Task already Exists", success: false});
        }

        const image = req.file ? req.file.filename : null;

        const newtask = new taskModel({
            title,
            description,
            priority,
            taskDate,
            status,
            image,
            createdBy: userId,
            createdAt: Date.now(),
        });

        await newtask.save();
        res.status(201).send({ message: "Task Created Successfully", success: true});
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

// Add Collaboraters 
const addCollaborator = async (req, res) => {
    try {
        const { id: taskId} = req.params;
        const { collaboratername, status, createdAt} = req.body;

        const task = await taskModel.findById(taskId);
        if(!task) {
            return res.status(404).send({message: "Task not found", success: false});
        }

        const user = await UserModel.findById(collaboratername);
        if(!user) {
            return res.status(404).send({ message: "Collaborator are not found", success: false});
        }

        task.collaboraters.push({
            collaboratername,
            status: status || "Not Started",
            createdAt: Date.now(),
        });

        await task.save();

        res.status(201).send({message: "Collaborator are Added Successfully", task, success: true,});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error", success: false});
    }
};

// Get All Tasks
async function getTaskById(req, res) {
    try {
        const task = await taskModel.findById(req.params.taskId);

        if (!task) {
            return res.status(404).send({message: "Sorry,Task are not found", success: false});
        }

        const modifiedTask = {
            _id: task._id,
            title: task.title,
            description: task.description,
            category: task.category,
            priority: task.priority,
            taskDate: task.taskDate,
            status: task.status,
            image: task.image ? `http://localhost:5000/uploads/${task.image}` : null,
            createdBy: task.createdBy,
            createdAt: task.createAt,
            collaboraters: task.collaboraters,
        };

        res.status(200).send({ task: modifiedTask, success: true});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error, please check once", success: false});
    }
};

// get all Tasks
async function getAllTask(req, res) {
    try {
        const tasks = await taskmodel.find();
        
    const modifiedtask = tasks.map((task) => ({
        _id: task._id,
        title: task.title,
        description: task.description,
        category: task.category,
        priority: task.priority,
        taskDate: task.taskDate,
        status: task.status,
        image: task.image ? `http://localhost:5000/uploads/${task.image}` : null,
        createdBy: task.createdBy,
        createdAt: task.createdAt,
        collaboraters: task.collaboraters,
    }));

    res.status(200).send({ modifiedtask, success: true });
    } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error", success: false });
    }
}

// Update a Task 
async function updateTask(req, res) {
    console.log(req.body);
    const {id: taskId } = req.params;
    const {
        title,
        description,
        category,
        priority,
        image,
        createdBy,
        collaboraters,
    } = req.body;
    
    try {
        const task = await taskModel.findByIdAndUpdate(taskId);
        if (!task) {
            res.status(404).send({message: "Product Id is not found"});
        }
        task.title = title || task.title;
        task.description = description || task.description;
        task.category = category || task.category;
        task.priority = priority || task.priority;
        task.image = image || task.image;
        task.createdBy = createdBy || task.createdBy;
        task.collaboraters = collaboraters || task.collaboraters;
        await task.save();
        res.status(201).send({message: "Task Added Successfully", success: true});
    } catch (error) {
        res.status(500).send({error: "Server error", true: false});
    }
}

// Delete a Task
async function deleteTask(req, res) {
    console.log(req.body);
    const { id: taskId} = req.params;
    try {
        const task = await taskModel.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(404).send({message: "Sorry, Task Id are not found", success: false});
        }
        res.status(200).send({message: "Task Deleted Successfully", success: true});
    } catch (error) {
        res.status(500).send({ error: "Server Error", success: false });
    }
}

// Get All Filtered Task
const getFilteredTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({
            priority: { $in: ["Moderate","Extreme"]},
        });

        res.status(201).send({
            success: true,
            tasks,
        });
    } catch (error) {
        res.status(500).send({ message: "Sorry,You unable to retrieve tasks", success: false});
    }
};

// Get fetched tasks for only logged-in user
const getTasksForUser = async (req, res) => {
    try {
        const tasks = await taskModel.find({ createdBy: req.user._id});

        if(!tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found for this user"});
        }
        res.status(200).send({ tasks });
    } catch (error) {
        res.status(500).send({ message: "Server Error", error});
    }
};

module.exports = {
    addTask,
    addCollaborator,
    getTaskById,
    getAllTask,
    updateTask,
    deleteTask,
    getFilteredTasks,
    getTasksForUser,
};

