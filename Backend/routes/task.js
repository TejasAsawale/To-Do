const express = require("express");
const taskController = require("../controllers/taskController");
const { protect }= require("../middleware/authMiddleware");
const router = express.Router();
const upload = require("../config/multer");

router.post("/createTask",protect,upload.single('image'),taskController.CreateTask);
// router.get("/mytasks", auth, getTasks);

module.exports = router;
