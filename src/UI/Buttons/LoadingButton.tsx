import { FC } from "react";
import { ButtonProps, CircularProgress } from "@mui/material";
import { CustomButton } from "./CustomButton";

interface LoadingButtonProps {
    isLoading: boolean;
}

export const LoadingButton: FC<LoadingButtonProps & ButtonProps> = ({
    isLoading,
    children,
    ...props
}) => {
    return (
        <CustomButton {...props} disabled={isLoading}>
            {isLoading ? (
                <CircularProgress color="inherit" size={30} />
            ) : (
                children
            )}
        </CustomButton>
    );
};
