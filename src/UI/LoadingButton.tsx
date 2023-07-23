import { FC, ReactNode } from "react";
import { styled, Button, CircularProgress, ButtonProps } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

interface LoginButtonProps {
    isLoading: boolean;
    children: ReactNode;
}

export const LoadingButton: FC<LoginButtonProps & ButtonProps> = ({
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
