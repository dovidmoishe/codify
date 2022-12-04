import express from "express";
import {postCode , getCode ,delCode , getCodeId , updateCode} from '../controllers/_code.js'
const router = express.Router();

//routes
router.post('/postcode',postCode);
router.get('/get/:id',getCode);
router.delete('/delete/:id',delCode)
router.get('/view/:id', getCodeId)
router.patch('/update/:id', updateCode)
export default router;