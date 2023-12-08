import express from 'express';
import { AzureOpenAiService } from '../services/azure-openai-service';

export const router = express.Router();

router.get('/', async (req, res) => {
    const userID = req.query.userID;

    if(!userID) return res.status(422);
    
    const data = await AzureOpenAiService.getNext10Facts(userID as string)

    return res.json({data});
});
