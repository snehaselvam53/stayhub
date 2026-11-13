
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { verifyToken, verifyAdmin } = require("./middleware/authMiddleware");
const hotelRoutes = require("./routes/hotelRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
    response.send("Welcome to StayHub Backend");
});

app.get("/api/test-db", async function (request, response) {
    try {
        const result = await pool.query("SELECT NOW()");

        response.json({
            message: "PostgreSQL connected successfully!",
            time: result.rows[0].now
        });

    } catch (error) {
        console.log("Database error:", error.message);

        response.status(500).json({
            message: "Database connection failed"
        });
    }
});

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);

const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("StayHub server started successfully");
    console.log("Server is running on port " + port);
});

app.get("/api/admin/test", verifyToken, verifyAdmin, (req, res) => {
    res.json({
        message: "Welcome Admin"
    });
});
