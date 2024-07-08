// backend/server.js
require('dotenv').config(); // Charger les variables d'environnement depuis .env
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;
const secretKey = process.env.SECRET_KEY || 'yourSecretKey'; // Utilisation de la clé secrète depuis .env ou une valeur par défaut

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Assurez-vous que le mot de passe est correct pour votre configuration
    database: 'sportracker',
    port: 8889 // Port MySQL par défaut pour MAMP
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Route d'inscription
app.post('/register', (req, res) => {
    const { email, password, firstname, sex } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const sql = 'INSERT INTO users (email, password, firstname, sex, created_at) VALUES (?, ?, ?, ?, NOW())';
    db.query(sql, [email, hashedPassword, firstname, sex], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).send({ message: 'Server error' });
        }
        res.status(201).send({ message: 'User registered successfully!' });
    });
});

// Route de connexion
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error logging in user:', err);
            return res.status(500).send({ message: 'Server error' });
        }
        if (results.length === 0) {
            return res.status(404).send({ message: 'User not found!' });
        }

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid Password!' });
        }

        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: 86400 });
        res.status(200).send({ message: 'Login successful!', token, user: { id: user.id, firstname: user.firstname, email: user.email } });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});