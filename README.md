🔐 React Node.js MySQL Authentication App
A full-stack authentication project built with:

Frontend: React (Vite) + Tailwind CSS

Backend: Node.js + Express

Database: MySQL

Authentication: JWT (JSON Web Token)

📁 Project Structure
pgsql
Copy
Edit
project/
├── backend/
│   ├── routes/
│   │   └── authRoutes.js
│   ├── lib/
│   │   └── db.js
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Home.jsx
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   └── App.jsx
│   └── vite.config.js
⚙️ Setup Instructions
1. 📦 Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=authentication
PORT=3000
JWT_KEY=jwt-secret-key
Start the server:

bash
Copy
Edit
nodemon index.js
2. 💻 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
✅ Features
🔐 JWT-based Login & Signup

📦 Secure password hashing with bcrypt

🧠 Token verification middleware

🧾 Protected /home route that fetches user data only if authenticated

🌐 Frontend navigation with React Router

🎨 Clean UI with Tailwind CSS

📌 API Endpoints
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user, get JWT
GET	/auth/home	Get user info (auth required)

📝 MySQL Table
sql
Copy
Edit
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);
🛡 Token Storage
JWT is stored in localStorage after login:

js
Copy
Edit
localStorage.setItem('token', token);
Sent with protected requests using:

js
Copy
Edit
headers: {
  Authorization: `Bearer ${token}`
}
🚀 Future Improvements
✅ Role-based access (Admin/User)

📬 Forgot password via email

📱 Responsive mobile design

⚒️ Better form validation with Zod or Yup

📷 Preview
You can add screenshots/gifs here for demo

🧑‍💻 Author
Amnesh Pal
📍 Sector 44, Gurgaon
✉️ amneshpal15@gmail.com

