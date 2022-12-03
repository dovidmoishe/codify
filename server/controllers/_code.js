import Codes from "../models/code.model.js";

//post code function
export const postCode = async (req, res) => {
  const code = req.body;
  Codes.create(code, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data).status(200);
    }
  });
};
export const getCode = async (req, res) => {
  try {
    const data = await Codes.find({u_id : req.params.id});
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
  }
};
export const delCode=async (req,res)=>{
    try{
        if(req.params.id){
        const del = await Codes.findByIdAndDelete(req.params.id)
        res.send(del)
        }
    }
    catch (err) {
        console.log(err);
      }
}
