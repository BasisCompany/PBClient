import { FC, ReactNode } from "react";
import { Box, BoxProps, alpha } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const buttonStyles = {
    position: "absolute",
    right: 0,
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in",
};

interface ImgButtonsBoxProps extends BoxProps {
    children: ReactNode;
}

export const ImgButtonsBox: FC<ImgButtonsBoxProps> = ({
    children,
    ...props
}) => {
    return (
        <Box position="relative" {...props}>
            {children}
            <Box
                sx={{
                    ...buttonStyles,
                    top: 0,
                    borderRadius: "0px 15px 0px",
                    bgcolor: (theme) =>
                        alpha(theme.palette.bgcolor.tertiary.main, 0.6),
                    ":hover": {
                        cursor: "pointer",
                        transition: "all 0.2s ease-in",
                        bgcolor: "rgba(233,30,99,0.9)",
                    },
                }}
            >
                <DeleteIcon sx={{ color: "#FFF" }} />
            </Box>
            <Box
                sx={{
                    ...buttonStyles,
                    bottom: 0,
                    borderRadius: "15px 0px 15px",
                    bgcolor: (theme) =>
                        alpha(theme.palette.bgcolor.tertiary.main, 0.6),
                    ":hover": {
                        cursor: "pointer",
                        transition: "all 0.2s ease-in",
                        bgcolor: "rgba(4,154,222,0.9)",
                    },
                }}
            >
                <EditIcon sx={{ color: "#FFF" }} />
            </Box>
        </Box>
    );
};
