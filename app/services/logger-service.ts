import { DateTime } from "luxon";
import { LoggingLevels } from "../enums/logging-levels.enum";

export namespace Logger {

    const debugLevel = Number(process.env.LOGGING_LEVEL) || LoggingLevels.WARN;

    const showDebug = () => debugLevel <= LoggingLevels.DEBUG;
    const showInfo = () => debugLevel <= LoggingLevels.INFO;
    const showWarn = () => debugLevel <= LoggingLevels.WARN;
    const showError = () => debugLevel <= LoggingLevels.ERROR;

    export const debug = (message: any) => showDebug() && console.debug(DateTime.now().toISO() + ' [DEBUG] :' + JSON.stringify(message));
    export const info = (message: any) => showInfo() && console.info(DateTime.now().toISO() + ' [INFO] :' + JSON.stringify(message));
    export const warn = (message: any) => showWarn() && console.debug(DateTime.now().toISO() + ' [WARN] :' + JSON.stringify(message));
    export const error = (message: any) => showError() && console.debug(DateTime.now().toISO() + ' [ERROR] :' + JSON.stringify(message));
}