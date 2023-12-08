import express from 'express';
import { AzureOpenAiService } from '../services/azure-openai-service';
import { Logger } from '../services/logger-service';

export const router = express.Router();

router.get('/', async (_, res) => {
    Logger.debug('Received request at /facts')

    const data = await AzureOpenAiService.getNext10Facts()

    return res.json({data});
});
