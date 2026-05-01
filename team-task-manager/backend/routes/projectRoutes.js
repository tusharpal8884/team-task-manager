
const router = require("express").Router();
const { createProject, getProjects } = require("../controllers/projectController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.post("/", auth, admin, createProject);
router.get("/", auth, getProjects);

module.exports = router;
