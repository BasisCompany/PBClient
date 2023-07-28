// import { FC } from "react";

// interface FallbackErrorProps {
//     error: any;
//     resetErrorBoundary: any;
// }

export const FallbackError = () => {
    const reloadPage = () => {
        location.reload();
    };
    //TODO[Артём]: Стилизовать страницу ошибки
    return (
        <>
            <h1>Произошла ошибка</h1>
            <button onClick={reloadPage}>Обновить</button>
        </>
    );
};
