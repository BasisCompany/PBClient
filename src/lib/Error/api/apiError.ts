import { apiErrorMessages } from "./apiErrorMessages";

export interface ApiError {
    status: number;
    data: { statusCode: number; message: string; error: string };
}

const defaultError = "Произошла ошибка! Повторите попытку позже";

export const getUserErrorMessage = (error: ApiError) => {
    const statusCode = error?.data?.statusCode;
    const errorMessage = error?.data?.message;
    const errorInfoArray = statusCode ? apiErrorMessages[statusCode] : null;

    if (errorInfoArray) {
        const errorInfo = errorInfoArray.find(
            (error) => error.message === errorMessage
        );
        return errorInfo ? errorInfo.displayMsg : defaultError;
    }

    return defaultError;
};
