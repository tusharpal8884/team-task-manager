
const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const project = new Project({
    ...req.body,
    createdBy: req.user.id
  });

  await project.save();
  res.send(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate("members");
  res.send(projects);
};
