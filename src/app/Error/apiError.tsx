const errors = {
    INVALID_CREDENTIALS: {
        message: "Invalid credentials",
        str: "Email или пароль указаны неверно",
    },
    THROTTLER: {
        message: "ThrottlerException: Too Many Requests",
        str: "Слишком много запросов! Повторите попытку позже",
    },
};

export type ApiError = {
    status: number;
    data: { statusCode: number; message: string; error: string };
};

export const getErrorMessage = (error: ApiError) => {
    if (error?.data?.statusCode === 401) {
        if (error?.data?.message === errors.INVALID_CREDENTIALS.message) {
            return errors.INVALID_CREDENTIALS.str;
        }
    }

    if (error?.data?.statusCode === 429) {
        if (error?.data?.message === errors.THROTTLER.message) {
            return errors.THROTTLER.str;
        }
    }

    return "Произошла ошибка! Повторите попытку позже";
};
