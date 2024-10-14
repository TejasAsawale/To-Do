const mongoose = require("mongoose");
const  taskModel = require("../models/Task");
const PriorityModel = require("../models/Priority");
const UserModel = require("../models/User");

// Add  new task
const addtask = async (req, res) => {
    console.log(req.body);
    const userid = req.user._id;

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
            createdBy: userid,
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
