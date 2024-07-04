import { CardHeader, IconButton } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { DispatchWithoutAction, FC } from "react";
import { FlexBox } from "@/shared/ui/FlexBox";

interface RegisterHeaderProps {
    toggleLogin: DispatchWithoutAction;
}

//TODO[Артем]: CardHeader
export const RegisterHeader: FC<RegisterHeaderProps> = ({ toggleLogin }) => {
    return (
        <FlexBox justifyContent="flex-start" height="30px">
            <CardHeader
                sx={{
                    height: "220px",
                    pt: 1,
                    paddingLeft: 1,
                }}
                action={
                    <IconButton aria-label="back" onClick={toggleLogin}>
                        <KeyboardBackspaceRoundedIcon
                            sx={{
                                fontSize: 25,
                            }}
                        />
                    </IconButton>
                }
            />
        </FlexBox>
    );
};
