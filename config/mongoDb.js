import mongoose from "mongoose"

const connectToDb = async()=>{
    const {connection} = await mongoose.connect(`mongodb+srv://sunandapandu310:${process.env.DATABASE_PASSWORD}@cluster0.deplkys.mongodb.net/Blog_DB?retryWrites=true&w=majority&appName=Cluster0`);
    if(connection){
        console.log(`DB is connected to ${connection.host}`);
    }
}
export default connectToDb;