import express from "express";
import {postCode , getCode ,delCode} from '../controllers/_code.js'
const router = express.Router();

//routes
router.post('/postcode',postCode);
router.get('/get/:id',getCode);
router.delete('/delete/:id',delCode)

export default router;