import { Typography } from "@mui/material";
import { DispatchWithoutAction, FC } from "react";
import { FlexBox } from "@/shared/ui/FlexBox";

interface LoginButtonProps {
    toggleLogin: DispatchWithoutAction;
}

export const LoginButton: FC<LoginButtonProps> = ({ toggleLogin }) => {
    return (
        <FlexBox justifyContent="center" mt="20px">
            <Typography
                color="text.secondary"
                sx={{
                    marginRight: "5px",
                    fontSize: 14,
                    visibility: "visible",
                    maxHeight: "150px",
                    WebkitLineClamp: "2",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    cursor: "default",
                }}
            >
                Уже есть аккаунт?
            </Typography>
            <Typography
                variant="h6"
                onClick={toggleLogin}
                sx={{
                    fontSize: 14,
                    cursor: "pointer",
                }}
            >
                Войдите
            </Typography>
        </FlexBox>
    );
};
