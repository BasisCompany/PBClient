const errors = {
    INVALID_CREDENTIALS: {
        message: "Invalid credentials",
        str: "Email или пароль указаны неверно",
    },
    THROTTLER: {
        message: "ThrottlerException: Too Many Requests",
        str: "Слишком много запросов! Повторите попытку позже",
    },
    NOT_VERIFY_EMAIL: {
        message: "Not verified, a new email has been sent",
        str: "Вы не подтвердили свою почту",
    },
};

export interface ApiError {
    status: number;
    data: { statusCode: number; message: string; error: string };
}

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

    if (error?.data?.statusCode === 403) {
        if (error?.data?.message === errors.NOT_VERIFY_EMAIL.message) {
            return errors.NOT_VERIFY_EMAIL.str;
        }
    }

    return "Произошла ошибка! Повторите попытку позже";
};
