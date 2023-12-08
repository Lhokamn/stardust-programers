import { AzureKeyCredential, ChatMessage, OpenAIClient } from "@azure/openai";
import { Logger } from "./logger-service";

export namespace AzureOpenAiService {

    const endpoint = process.env.AZURE_ENDPOINT;
    const apiKey = process.env.AZURE_API_KEY;
    const deploymentName = process.env.AZURE_DEPLOYMENT_NAME;

    if(!endpoint || !apiKey || !deploymentName) throw new Error('Missing env variables');

    const azureOpenaiClient = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    export const getNext10Facts = async (): Promise<string[]> => {
        const messages = [{role: 'system', content: 'give me 10 facts about climate change, you will format your message like this : fact1;fact2;fact3...'}]; 

        const chatCompletionResult = await azureOpenaiClient.getChatCompletions(deploymentName, messages)
        
        const newMessages: ChatMessage[] = [];

        for(let choice of chatCompletionResult.choices) {
            choice.message && newMessages.push(choice.message);
        }

        const facts = newMessages[0].content?.split(/\r\n|\r|\n\d+\.\s*/).filter(fact => fact !== '').map(fact => fact.replace('1.', ''));
        if(!facts) throw new Error('Empty new facts');

        return facts;
    }    
}