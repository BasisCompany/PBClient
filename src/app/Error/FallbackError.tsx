// import { FC } from "react";

import { ErrorPage } from "./ErrorPage";

export const FallbackError = () => {
    return (
        <>
            <ErrorPage
                status={"404"}
                description={"Запрашиваемый ресурс не найден на сервере"}
            />
        </>
    );
};
