import Users from "../models/user.model.js";

//posting user signup data

export const PostUser = async (req, res) => {
  const { user, password } = req.body;
  const dbdata = req.body;
  if (!user || !password) {
    return res.status(422).json({ error: "Credentials must be filled" });
  }
  const isUser = await Users.findOne({ user: user });
  if (isUser) {
    return res.status(206).json({ error: "User already exist" });
  }
  Users.create(dbdata, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data).status(200);
    }
  });
};

//Login user info

export const CheckUser = async (req, res) => {
  const { user, password } = req.body;
  const isUser = await Users.findOne({ user: user, password: password });
  if (isUser) {
    return res.status(200).json({ user: isUser.user, id: isUser._id });
  }
  if (!isUser) {
    return res.status(206).json({ messsage: "Credentials donot match" });
  }
};
