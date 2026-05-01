Here is the link to access the project - https://chic-dedication-production.up.railway.app/


# 🚀 Team Task Manager (Full-Stack)

A full-stack web application where users can create projects, assign tasks, and track progress with role-based access (Admin/Member).

---

## 🔥 Features

### 🔐 Authentication

* User Signup & Login (JWT-based)
* Role-based access (Admin / Member)

### 📁 Project Management

* Create projects
* View project list
* Add team members to projects

### ✅ Task Management

* Create tasks
* Update task status (Pending → Completed)
* Track task progress

### 📊 Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Progress percentage

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas


---

## ⚙️ Installation (Local Setup)

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/team-task-manager.git
cd team-task-manager
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 API Endpoints

### Auth

* POST /api/auth/signup
* POST /api/auth/login

### Projects

* GET /api/projects
* POST /api/projects

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id

---

## 🚀 Deployment

* Backend deployed on Railway
* Frontend deployed on Vercel

---

## 👨‍💻 Author

Tushar Pal
