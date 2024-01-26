interface ApiErrorInfo {
    type: string;
    message: string;
    displayMsg: string;
}

export const apiErrorMessages: Record<number, ApiErrorInfo[]> = {
    401: [
        {
            type: "INVALID_CREDENTIALS",
            message: "Invalid credentials",
            displayMsg: "Email или пароль указаны неверно",
        },
    ],
    403: [
        {
            type: "NOT_VERIFY_EMAIL",
            message: "Not verified, a new email has been sent",
            displayMsg: "Вы не подтвердили свою почту",
        },
    ],
    429: [
        {
            type: "THROTTLER",
            message: "ThrottlerException: Too Many Requests",
            displayMsg: "Слишком много запросов! Повторите попытку позже",
        },
    ],
};
