const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// app.use("/api/auth",authRoute);
// app.use("/api/task", taskRouter);
// app.use("/api/priority", priorityRouter);
// app.use("/api/category", categoryRoute);
// app.use("/api/invite", inviteRoute);
// app.use("/uploads", express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
