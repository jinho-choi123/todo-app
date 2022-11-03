import mongoose from 'mongoose';

const connectDB = () => {
    mongoose.connect(`${process.env.mongoDB_URI}`, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`
            @@@@@@@@@@@@@@@@@@@@@@@@@
            MONGODB CONNECTED
            @@@@@@@@@@@@@@@@@@@@@@@@@`)
        }
    })
}

export default connectDB