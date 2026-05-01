
const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.send(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.send(tasks);
};

exports.updateTaskStatus = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.send(task);
};
