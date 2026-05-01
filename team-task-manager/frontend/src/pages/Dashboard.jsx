import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [projectName, setProjectName] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const p = await API.get("/projects");
      const t = await API.get("/tasks");
      setProjects(p.data);
      setTasks(t.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔹 Create Project
  const createProject = async () => {
    if (!projectName) return alert("Enter project name");

    await API.post("/projects", {
      name: projectName,
      description: "Created from UI"
    });

    setProjectName("");
    load();
  };

  // 🔹 Create Task
  const createTask = async () => {
    if (!taskTitle) return alert("Enter task title");

    await API.post("/tasks", {
      title: taskTitle,
      description: taskDesc,
      status: "pending"
    });

    setTaskTitle("");
    setTaskDesc("");
    load();
  };

  // 🔹 Update Status
  const updateStatus = async (id) => {
    await API.put(`/tasks/${id}`, {
      status: "completed"
    });
    load();
  };

  // 🔥 Dashboard Stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const pendingTasks = tasks.filter(t => t.status !== "completed").length;
  const completionRate = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <div style={{ padding: "20px", background: "#f5f7fa", minHeight: "100vh" }}>
      <h2>Dashboard</h2>

      {/* 🔥 STATS */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <div style={statCard}>
          <h4>Total Tasks</h4>
          <p>{totalTasks}</p>
        </div>

        <div style={statCard}>
          <h4>Completed</h4>
          <p>{completedTasks}</p>
        </div>

        <div style={statCard}>
          <h4>Pending</h4>
          <p>{pendingTasks}</p>
        </div>

        <div style={statCard}>
          <h4>Progress</h4>
          <p>{completionRate}%</p>
        </div>
      </div>

      {/* 🔥 CREATE PROJECT */}
      <div style={card}>
        <h3>Create Project</h3>

        <input
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          style={input}
        />

        <button onClick={createProject} style={btn}>
          Create
        </button>
      </div>

      {/* 🔥 CREATE TASK */}
      <div style={card}>
        <h3>Create Task</h3>

        <input
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={input}
        />

        <input
          placeholder="Description"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          style={input}
        />

        <button onClick={createTask} style={btn}>
          Add Task
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        
        {/* Projects */}
        <div style={{ flex: 1 }}>
          <h3>Projects</h3>
          {projects.map(p => (
            <div key={p._id} style={cardSmall}>
              {p.name}
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div style={{ flex: 1 }}>
          <h3>Tasks</h3>
          {tasks.map(t => (
            <div key={t._id} style={cardSmall}>
              <b>{t.title}</b><br />
              {t.status}

              {t.status !== "completed" && (
                <button
                  onClick={() => updateStatus(t._id)}
                  style={btnSmall}
                >
                  Mark Completed
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// 🎨 Styles
const statCard = {
  flex: 1,
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
};

const cardSmall = {
  background: "white",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px"
};

const input = {
  padding: "10px",
  width: "100%",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btn = {
  padding: "10px",
  background: "#667eea",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const btnSmall = {
  marginTop: "5px",
  padding: "5px 10px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};