
require("dotenv").config();

const pool = require("./config/db");
const bcrypt = require("bcryptjs");

async function createAdmin() {
    try {
        const fullName = "StayHub Admin";
        const email = "admin@stayhub.com";
        const password = "Admin@123";

        const existing = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [email]
        );

        if (existing.rows.length > 0) {
            console.log("Admin already exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            `INSERT INTO users (full_name, email, password_hash, role)
             VALUES ($1, $2, $3, 'admin')`,
            [fullName, email, hashedPassword]
        );

        console.log("Admin created successfully");
    } catch (error) {
        console.log(error.message);
    } finally {
        await pool.end();
    }
}

createAdmin();