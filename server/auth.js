const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db'); // Import the PostgreSQL pool from db.js
const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    return res.status(401).send('You need to log in to access this page');
}

// Password Validation
const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

// Example of a protected route
router.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`Welcome to the dashboard, ${req.session.user.username}`);
});

// User registration route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username is already taken
        const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (rows.length > 0) {
            return res.status(400).send('Username already exists');
        }

        if (!validatePassword(password)) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.' });
        }

        // Hash the password before saving it
        const hash = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving user');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (rows.length === 0) {
            return res.status(400).send('User not found');
        }
        const user = rows[0];

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid password');
        }

        // Save user session
        req.session.user = user;
        res.status(200).send('Login successful');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error finding user');
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.status(200).send('Logout successful');
    });
});

module.exports = router;
