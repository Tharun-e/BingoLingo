import express from 'express';
import { Res } from '../model/Restaurant.js';

const router = express.Router();

router.get('/d',async(req,res)=>{
    const data = await Res.find();
    res.json(data);
});
export default router;