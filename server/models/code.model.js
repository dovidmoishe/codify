import mongoose from "mongoose"
const codeSchema= mongoose.Schema({
    u_id:String,
    title:String,
    code:String,
}
);
const Users = mongoose.model("codes",codeSchema)
export default Codes;