import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoutes from "./Routes/AuthRoutes.js";
import UserRoutes from "./Routes/UserRoutes.js";
import PostRoutes from "./Routes/PostRoutes.js";


//Routes
const app = express();


//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

//dotenv configuration
dotenv.config()

//mongoDB connect
mongoose.connect(process.env.MONGO_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(process.env.PORT, () => 
        console.log(`Listening on port ${process.env.PORT}`));
    }).catch((error) => console.log(error));



    // usuage of routes
    app.use("/auth", AuthRoutes);
    app.use("/user", UserRoutes);
    app.use("/post", PostRoutes);



