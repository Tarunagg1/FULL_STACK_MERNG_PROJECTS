const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(error);
    }

};

module.exports = connectDB;
