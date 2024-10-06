const express = require("express");
const { addTask, getTasks } = require("../controllers/taskController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", auth, addTask);
router.get("/mytasks", auth, getTasks);

module.exports = router;
