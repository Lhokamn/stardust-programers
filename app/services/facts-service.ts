import axios from "axios";
import { Logger } from "./logger-service";


export namespace FactsService {

    if(!process.env.API_URL) throw new Error('Missing env variable API_URL!')
    const route = '/facts';
    const requestUrl = process.env.API_URL + route;

    Logger.debug(process.env.API_URL)

    export const getNextFacts = async () => {

        Logger.debug('Intitiating request at ' + requestUrl);

        return axios.get(requestUrl).then(res => {
            return res.data
        });
    }

}