import express from 'express';
import { connectToDatabase } from '../lib/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const db = await connectToDatabase();

    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users(username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    console.error("❌ Register Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await connectToDatabase();

    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: '3h' });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, username: user.username, email: user.email }
    });

  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(403).json({ message: "No Token Provided" });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.error("❌ Token Verification Error:", err.message);
    return res.status(500).json({ message: "Token verification failed", error: err.message });
  }
};

// Protected Route
router.get('/home', verifyToken, async (req, res) => {
  try {
    const db = await connectToDatabase();

    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.userId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User does not exist" });
    }

    return res.status(201).json({ user: rows[0] });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
