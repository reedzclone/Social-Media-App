import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthCotroller.js";

const router = express.Router()

// It is of no use but for refrence purpose
// router.get("/", async(req, res) => {
//     res.send("Auth Route")
// })

// when ever you want to send a request to the sever you use the post request.
//The path and the function for the request
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router