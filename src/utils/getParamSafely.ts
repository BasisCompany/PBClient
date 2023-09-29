export function getNumberParamSafely(paramName: string) {
    return function (searchParams: URLSearchParams, defaultValue: number) {
        const pageParam = searchParams.get(paramName);

        if (pageParam !== null) {
            const parsedValue = parseInt(pageParam);
            if (!isNaN(parsedValue)) {
                return parsedValue;
            }
        }

        return defaultValue;
    };
}

export function getStringParamSafely(paramName: string) {
    return (searchParams: URLSearchParams, validValues: string[]): string => {
        const paramValue = searchParams.get(paramName);

        if (paramValue !== null && validValues.includes(paramValue)) {
            return paramValue;
        }

        return validValues[0];
    };
}

export const getPageParamSafe = getNumberParamSafely("page");
export const getSortParamSafe = getStringParamSafely("sort");
