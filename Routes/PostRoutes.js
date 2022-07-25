import express from "express";
import { createPost, deletePost, getPost, getTimeLine, likePost, updatePost } from "../Controllers/PostController.js";

const router = express.Router();

//create Post
router.post("/", createPost);

//Get Post
router.get("/:id", getPost);

//Update Post
router.put("/:id", updatePost);

//Delete Post
router.delete("/:id", deletePost);

//like post
router.put("/:id/like", likePost);

//Timeline
router.get(":/id/timeline", getTimeLine); 
export default router
