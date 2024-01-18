import express from "express";
import authRoutes from "./auth";

const router = express.Router();

router.use("/user", authRoutes);

router.get("/", (req, res) =>{
    res.status(200).send({message: "Hello world"});
})

export default router;
