import mongoose from 'mongoose'

const MongoDB_URL = process.env.MongoDB_URL;

const dbconnect = () => {
    mongoose.connect(MongoDB_URL)
        .then((conn) => console.log(`Connected to ${conn.connection.host}`))
        .catch((e) => console.log(e.message));
};

module.exports = dbconnect;