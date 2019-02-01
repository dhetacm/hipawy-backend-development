const User = require("../models").user;

exports.getUsers = async (req, res) => {
  console.log(true);
  try {
    const users = await User.findAll();

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "There is an error.", err });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const [isUpdated] = await User.update(req.body, {
      where: { id: req.params.id }
    });

    if (Boolean(isUpdated)) {
      const user = await User.findById(req.params.id);

      res.status(200).json({ user });
    } else {
      res.status(400).json({});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There is an error.", err });
  }
};
