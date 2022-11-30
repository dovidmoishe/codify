import Codes from "../models/user.model.js";

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
