const mongoose = require('mongoose');
const colors = import('colors');

const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            // useFindAndModify : true,
        });

        console.log(`MongoDB connected here : , ${con.connection.host}`.cyan.underline.bold);
    }catch(err){
        console.log('error occured'.red.bold, err.message);
        process.exit();
    }
}

module.exports = connectDB;