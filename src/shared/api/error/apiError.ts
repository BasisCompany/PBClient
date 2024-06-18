export interface ApiError {
    status: number;
    data: {
        statusCode: number;
        message: string;
        error: string;
        userMessage: string;
    };
}

const defaultError = "Произошла ошибка! Повторите попытку позже";

export const getUserErrorMessage = (error: ApiError) => {
    const errorMessage = error?.data?.userMessage;
    return errorMessage ?? defaultError;
};
