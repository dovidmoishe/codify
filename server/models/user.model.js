import mongoose from "mongoose"
const userSchema= mongoose.Schema({
    user:String,
    password:String
}
);
const Users = mongoose.model("users",userSchema)
export default Users;