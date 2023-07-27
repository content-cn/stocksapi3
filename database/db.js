
import mongoose from 'mongoose';

const Connection =async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.pfjpwxz.mongodb.net/stockapis`;
    try {
        await mongoose.connect(URL)
        console.log('db connected successfully')
    } catch (error) {
        console.log('db failed to connect',error)
    }
}
export default Connection