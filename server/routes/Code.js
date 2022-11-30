import express from "express";
import {postCode} from '../controllers/_code.js'
const router = express.Router();

//routes
router.post('/postcode',postCode);


export default router;