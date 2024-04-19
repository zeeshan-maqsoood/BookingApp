require('dotenv').config()
module.exports = {
    development:{
        PORT:process.env.PORT||5000,
        MONGODB_URL:process.env.MONGO_URL
    }
};
