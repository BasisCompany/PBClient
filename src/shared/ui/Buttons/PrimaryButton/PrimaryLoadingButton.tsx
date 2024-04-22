import { FC } from "react";
import { ButtonProps, CircularProgress } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";

interface PrimaryLoadingButtonProps {
    isLoading: boolean;
}

export const PrimaryLoadingButton: FC<
    PrimaryLoadingButtonProps & ButtonProps
> = ({ isLoading, children, ...props }) => {
    return (
        <PrimaryButton disabled={isLoading} {...props}>
            {isLoading ? (
                <CircularProgress color="inherit" size={30} />
            ) : (
                children
            )}
        </PrimaryButton>
    );
};
