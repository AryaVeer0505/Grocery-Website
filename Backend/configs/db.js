import mongosse from 'mongoose'

const connectDB=async()=>{
    try {
        mongosse.connection.on('connected',()=>{
            console.log("Database Connected")
        })
        await mongosse.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.log(error.message);
        
    }
}
export default connectDB