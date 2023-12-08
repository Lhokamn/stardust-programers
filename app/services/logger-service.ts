import { DateTime } from "luxon";

export namespace Logger {
     const showDebug = () => true;
     const showInfo = () => true;
     const showWarn = () => true;
     const showError = () => true;
 
     export const debug = (message: any) => showDebug() && console.debug(DateTime.now().toISO() + ' [DEBUG] :' + JSON.stringify(message));
     export const info = (message: any) => showInfo() && console.info(DateTime.now().toISO() + ' [INFO] :' + JSON.stringify(message));
     export const warn = (message: any) => showWarn() && console.debug(DateTime.now().toISO() + ' [WARN] :' + JSON.stringify(message));
     export const error = (message: any) => showError() && console.debug(DateTime.now().toISO() + ' [ERROR] :' + JSON.stringify(message));
 }