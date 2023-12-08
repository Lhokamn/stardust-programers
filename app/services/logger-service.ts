import { DateTime } from "luxon";

export namespace Logger {
     export const debug = (message: any) => console.debug(DateTime.now().toISO() + ' [DEBUG] :' + message.toString());
     export const info = (message: any) => console.info(DateTime.now().toISO() + ' [INFO] :' + message.toString());
     export const warn = (message: any) => console.debug(DateTime.now().toISO() + ' [WARN] :' + message.toString());
     export const error = (message: any) => console.debug(DateTime.now().toISO() + ' [ERROR] :' + message.toString());
}