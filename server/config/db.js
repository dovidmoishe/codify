import mongoose from "mongoose";
export default function connectDb() {
  //connection url
  const connection_url =
    "mongodb+srv://roshanmern:92h1wpz1ONf6rJMC@cluster0.acjdibm.mongodb.net/noteify?retryWrites=true&w=majority";
  //connecting to db
  mongoose.connect(connection_url);
  try {
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Monogodb connection successfull");
    });
  } catch (e) {
    console.log("error:"(e));
  }
}
