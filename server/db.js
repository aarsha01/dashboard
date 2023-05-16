import mongoose from 'mongoose'

const connectDB = async () => {
    const mongo_url = 'mongodb+srv://dheeraj:dj@mongo1415@cluster0.kafuosd.mongodb.net/?retryWrites=true&w=majority'
    try {
        //database Name
        const con = await mongoose.connect(mongo_url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB