import { ReactNode, FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackError } from "./FallbackError";

interface ErrorProviderProps {
    children: ReactNode;
}

export const ErrorProvider: FC<ErrorProviderProps> = ({ children }) => {
    return (
        <ErrorBoundary FallbackComponent={FallbackError}>
            {children}
        </ErrorBoundary>
    );
};
