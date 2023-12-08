import { AzureKeyCredential, ChatMessage, OpenAIClient } from "@azure/openai";

export namespace AzureOpenAiService {

    const endpoint = process.env.AZURE_ENDPOINT;
    const apiKey = process.env.AZURE_API_KEY;
    const deploymentName = process.env.AZURE_DEPLOYMENT_NAME;

    if(!endpoint || !apiKey || !deploymentName) throw new Error('Missing env variables');

    const azureOpenaiClient = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    const factsHistoryMap = new Map<string, ChatMessage[]>();

    export const getNext10Facts = async (userID: string): Promise<string[]> => {
        const factsHistory = factsHistoryMap.get(userID);
        
        const messages = factsHistory 
            ? [...factsHistory, {role: 'system', content: 'give me 10 more facts'}] 
            : [{role: 'system', content: 'give me 10 facts about climate change'}]; 

        const chatCompletionResult = await azureOpenaiClient.getChatCompletions(deploymentName, messages)
        
        const newMessages: ChatMessage[] = [];

        for(let choice of chatCompletionResult.choices) {
            choice.message && newMessages.push(choice.message);
        }

        const facts = newMessages[0].content?.split('\n').filter(fact => fact !== '');
        if(!facts) throw new Error('Empty new facts');

        factsHistoryMap.set(userID, [...messages, newMessages].flat());

        return facts;
    }    
}