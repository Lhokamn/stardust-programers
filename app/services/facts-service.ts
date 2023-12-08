import axios from "axios";
import { Logger } from "./logger-service";


export namespace FactsService {

    const route = '/facts';
    const requestUrl = process.env.API_URL + route;

    export const getNextFacts = async () => {

        Logger.debug('Intitiating request at ' + requestUrl);

        return axios.get(requestUrl).then(res => {
            return res.data
        });
    }

}