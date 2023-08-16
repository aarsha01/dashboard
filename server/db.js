import mongoose from 'mongoose'

const connectDB = async () => {
    return new Promise(async (res, rej) => {
        const mongo_url = 'mongodb+srv://dheeraj:dj%40mongo1415@cluster0.kafuosd.mongodb.net/database?retryWrites=true&w=majority'
        try {
            //database Name
            const con = await mongoose.connect(mongo_url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log(`Database connected : ${con.connection.host}`)
            res(con)
        } catch (error) {
            console.error(`Error: ${error.message}`)
            rej()
            process.exit(1)
        }
    })
}

export default connectDB