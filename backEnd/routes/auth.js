import express from "express";
import {register } from "../controllers/auth.js";

const router = express.Router();

// router.post("login",);
router.post("/register",register);
// router.post("logout",);

export default router;
