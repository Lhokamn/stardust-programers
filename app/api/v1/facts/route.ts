import { AzureOpenAiService } from '@/app/services/azure-openai-service';
import { Logger } from '@/app/services/logger-service';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
    Logger.debug('Received request at /facts')

    const data = await AzureOpenAiService.getNext10Facts()

    return NextResponse.json(data);
}