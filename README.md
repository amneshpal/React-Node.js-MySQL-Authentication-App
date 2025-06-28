# 🔐 React Node.js MySQL Authentication App

A full-stack authentication project built with:

- **Frontend:** React (Vite) + Tailwind CSS  
- **Backend:** Node.js + Express  
- **Database:** MySQL  
- **Authentication:** JWT (JSON Web Token)

---

## 📁 Project Structure

<pre><code> ``` project/ ├── backend/ │ ├── routes/ │ │ └── authRoutes.js │ ├── lib/ │ │ └── db.js │ ├── index.js │ └── .env ├── frontend/ │ ├── src/ │ │ ├── pages/ │ │ │ ├── Login.jsx │ │ │ ├── Register.jsx │ │ │ └── Home.jsx │ │ ├── components/ │ │ │ └── Navbar.jsx │ │ └── App.jsx │ └── vite.config.js ``` </code></pre>


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
```

Start the backend server:
```
nodemon index.js

```


###2. 💻 Frontend Setup

```
cd frontend
npm install
npm run dev
```

##✅ Features
🔐 JWT-based Login & Signup

🔒 Secure password hashing with bcrypt

🔑 Token verification middleware

🔐 Protected /home route (accessible only after login)

🌐 Frontend navigation with React Router

🎨 Styled using Tailwind CSS


##📌 API Endpoints
```
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user & return JWT
GET	/auth/home	Get user info (protected)

```
###📝 MySQL Table

```
  CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);
```

##🛡 Token Storage
After login, token is saved in localStorage:

```
localStorage.setItem('token', token);

```

Sent with protected requests:

```
headers: {
  Authorization: `Bearer ${token}`
}
```

###🚀 Future Improvements
✅ Role-based access (Admin/User)

📬 Forgot password via email

📱 Responsive mobile design

⚒️ Form validation with Zod or Yup

###📷 Preview
Add screenshots/gifs of login and home page here

###🧑‍💻 Author
Amnesh Pal
📍 Sector 44, Gurgaon
📧 amneshpal15@gmail.com

---

### ✅ How to Use:

1. Save this as a file: `README.md` in your root directory.
2. Run:

```bash
git add README.md
git commit -m "Added complete project README"
git push
