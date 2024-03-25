import Friend from "../models/FriendModel.js";

export const getAllFriends = async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFriendById = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      return res.status(404).json({ message: "Friend not found" });
    }
    res.json(friend);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createFriend = async (req, res) => {
  const { name, email } = req.body;
  const friend = new Friend({ name, email });

  try {
    const newFriend = await friend.save();
    res.status(201).json(newFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateFriend = async (req, res) => {
  const { name, email } = req.body;
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      return res.status(404).json({ message: "Friend not found" });
    }
    friend.name = name || friend.name;
    friend.email = email || friend.email;
    const updatedFriend = await friend.save();
    res.json(updatedFriend);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteFriend = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      return res.status(404).json({ message: "Friend not found" });
    }
    await friend.remove();
    res.json({ message: "Friend deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
