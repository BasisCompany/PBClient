import { URL_ROOT } from "../api/config";

export const getUrlRoot = (path?: string) =>
    path ? `${URL_ROOT}/${path}` : undefined;
