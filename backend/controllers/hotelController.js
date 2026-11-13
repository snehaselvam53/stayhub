
const pool = require("../config/db");

async function getHotels(req, res) {
    try {
        const result = await pool.query(
            "SELECT * FROM hotels ORDER BY id DESC"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch hotels"
        });
    }
}

async function addHotel(req, res) {
    try {
        const {
            title,
            description,
            location,
            price,
            rating,
            available,
            room_type,
            image,
            latitude,
            longitude
        } = req.body;

        if (!title || !description || !location || !price) {
            return res.status(400).json({
                message: "Please fill all required fields"
            });
        }

        const result = await pool.query(
            `INSERT INTO hotels
            (title, description, location, price, rating, available, room_type, image, latitude, longitude)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *`,
            [
                title,
                description,
                location,
                price,
                rating || 4.0,
                available ?? true,
                room_type || "normal",
                image || null,
                latitude || null,
                longitude || null
            ]
        );

        res.status(201).json({
            message: "Hotel added successfully",
            hotel: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to add hotel"
        });
    }
}

async function updateHotel(req, res) {
    try {
        const { id } = req.params;
        const {
            title,
            description,
            location,
            price,
            rating,
            available,
            room_type,
            image,
            latitude,
            longitude
        } = req.body;

        const result = await pool.query(
            `UPDATE hotels
            SET title = $1,
                description = $2,
                location = $3,
                price = $4,
                rating = $5,
                available = $6,
                room_type = $7,
                image = $8,
                latitude = $9,
                longitude = $10
            WHERE id = $11
            RETURNING *`,
            [
                title,
                description,
                location,
                price,
                rating,
                available,
                room_type,
                image,
                latitude || null,
                longitude || null,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Hotel not found"
            });
        }

        res.status(200).json({
            message: "Hotel updated successfully",
            hotel: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to update hotel"
        });
    }
}

async function deleteHotel(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM hotels WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Hotel not found"
            });
        }

        res.status(200).json({
            message: "Hotel deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to delete hotel"
        });
    }
}

module.exports = {
    getHotels,
    addHotel,
    updateHotel,
    deleteHotel
};
