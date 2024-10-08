const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true,},
    lastName: { type: String, required: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});
module.exports = mongoose.model("User", UserSchema);
