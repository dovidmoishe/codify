import express from "express";
import {PostUser,CheckUser} from '../controllers/_user.js'
const router = express.Router();

//routes
router.post('/signup',PostUser);
router.post("/login",CheckUser);

export default router;