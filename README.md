# 🔐 React Node.js MySQL Authentication App

A full-stack authentication project built with:

- **Frontend:** React (Vite) + Tailwind CSS  
- **Backend:** Node.js + Express  
- **Database:** MySQL  
- **Authentication:** JWT (JSON Web Token)

---

## 📁 Project Structure
---
project/
├── backend/
│ ├── routes/
│ │ └── authRoutes.js
│ ├── lib/
│ │ └── db.js
│ ├── index.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── Home.jsx
│ │ ├── components/
│ │ │ └── Navbar.jsx
│ │ └── App.jsx
│ └── vite.config.js

---

## ⚙️ Setup Instructions

### 1. 📦 Backend Setup

```bash
cd backend
npm install

```
Create a .env file in backend/:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=authentication
PORT=3000
JWT_KEY=jwt-secret-key




