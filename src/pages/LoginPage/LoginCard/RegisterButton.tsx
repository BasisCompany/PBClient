import { DispatchWithoutAction, FC } from "react";
import { Typography } from "@mui/material";
import { FlexBox } from "@/shared/ui/FlexBox";

interface RegisterButtonProps {
    toggleLogin: DispatchWithoutAction;
}

export const RegisterButton: FC<RegisterButtonProps> = ({ toggleLogin }) => {
    return (
        <FlexBox justifyContent="center" mt="30px">
            <Typography
                color="text.secondary"
                sx={{
                    display: { xs: "none", md: "-webkit-box" },
                    marginRight: "5px",
                    fontSize: 14,
                    visibility: "visible",
                    maxHeight: "150px",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    cursor: "default",
                }}
            >
                Нет аккаунта?
            </Typography>
            <Typography
                variant="h6"
                onClick={toggleLogin}
                sx={{
                    fontSize: 14,
                    cursor: "pointer",
                }}
            >
                Зарегистрируйтесь
            </Typography>
        </FlexBox>
    );
};
