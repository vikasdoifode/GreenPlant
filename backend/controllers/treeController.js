import Tree from "../models/Tree.js";

export const addTree = async (req, res) => {
  const tree = await Tree.create({
    userId: req.user.id,
    treeType: req.body.treeType,
    imageUrl: req.body.imageUrl,
    geoLocation: req.body.geoLocation,
    plantedDate: new Date(),
    lastWatered: new Date(),
    healthStatus: "Healthy"
  });
  res.json(tree);
};

export const getUserTrees = async (req, res) => {
  const trees = await Tree.find({ userId: req.user.id });
  res.json(trees);
};
