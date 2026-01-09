import EcoAction from "../models/EcoAction.js";
import User from "../models/User.js";

export const addEcoAction = async (req, res) => {
  const action = await EcoAction.create({
    userId: req.user.id,
    actionType: req.body.actionType,
    description: req.body.description,
    points: 10
  });

  await User.findByIdAndUpdate(req.user.id, { $inc: { ecoCoins: 10 } });
  res.json(action);
};
