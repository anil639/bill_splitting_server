import express from "express";

import {
  getAllFriends,
  getFriendById,
  createFriend,
  updateFriend,
  deleteFriend,
} from "../controllers/friendController.js";

const router = express.Router();

router.get("/", getAllFriends);
router.get("/:id", getFriendById);
router.post("/createFriend", createFriend);
router.put("/updateFriend/:id", updateFriend);
router.delete("/delete/:id", deleteFriend);

export default router;
