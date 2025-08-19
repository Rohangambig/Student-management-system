const mongoose = require('mongoose');

const connectDB = async() => {
    try {

        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");

    }catch(err) {
        console.log("Error in database connection");
        process.exit(1);
    }
}

module.exports = connectDB;