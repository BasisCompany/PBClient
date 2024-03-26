export interface ApiError {
    status: number;
    data: { statusCode: number; message: string; error: string };
}

const defaultError = "Произошла ошибка! Повторите попытку позже";

export const getUserErrorMessage = (error: ApiError) => {
    const errorMessage = error?.data?.error && error?.data?.message;
    return errorMessage ?? defaultError;
};
