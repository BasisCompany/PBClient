import { FC, ReactNode, useCallback } from "react";
import { Box, BoxProps, alpha } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDropzone } from "react-dropzone";
import {
    MutationDefinition,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

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

interface EditButtonsProps extends BoxProps {
    children: ReactNode;
    updateImg: MutationTrigger<
        MutationDefinition<
            FormData,
            BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
            "Notification" | "Comment" | "User",
            void,
            "api"
        >
    >;
    deleteImg: MutationTrigger<
        MutationDefinition<
            void,
            BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
            "Notification" | "Comment" | "User",
            void,
            "api"
        >
    >;
    isAvatar?: boolean;
    showDelete?: boolean;
}

export const EditButtons: FC<EditButtonsProps> = ({
    children,
    updateImg,
    deleteImg,
    isAvatar = false,
    showDelete = true,
    ...props
}) => {
    const onDrop = useCallback(
        (files: File[]) => {
            if (files.length == 0) {
                return;
            }

            const formData = new FormData();
            formData.append(isAvatar ? "avatar" : "banner", files[0]);
            void updateImg(formData);
        },
        [isAvatar, updateImg]
    );

    const { getRootProps, getInputProps, open, isDragAccept } = useDropzone({
        onDrop,
        noClick: true,
        maxFiles: 1,
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });

    return (
        <Box
            position="relative"
            {...props}
            {...getRootProps()}
            sx={{
                borderRadius: "15px",
                border: (theme) =>
                    `2px dashed ${isDragAccept ? "#2196f3" : theme.palette.bgcolor.secondary.main}`,
                transition: "border .24s ease-in-out",
            }}
        >
            {children}
            {showDelete && (
                <Box
                    onClick={() => deleteImg()}
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
            )}

            <Box
                onClick={open}
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
                <input {...getInputProps()} />
            </Box>
        </Box>
    );
};
