import Challenge from "../models/Challenge.js";

export const createChallenge = async (req, res) => {
  const challenge = await Challenge.create(req.body);
  res.json(challenge);
};

export const joinChallenge = async (req, res) => {
  await Challenge.findByIdAndUpdate(req.params.id, {
    $push: { participants: req.user.id }
  });
  res.json("Joined Challenge");
};
