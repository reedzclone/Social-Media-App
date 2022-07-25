import express from "express";
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from "../Controllers/UserController.js";


const router = express.Router();

// get User Id
router.get("/:id", getUser);

// Update Route
router.put("/:id", updateUser);

//Delete Route
router.delete("/:id", deleteUser);

//Following Route
router.put("/:id/follow", followUser);

//Unfollowing Route
router.delete("/:id/unfollow", unFollowUser);

export default router; 