import { FC, ReactNode, useCallback } from "react";
import { Box, BoxProps, alpha } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDropzone } from "react-dropzone";
import { pbColors } from "@/app/providers/Theme";

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
    onUpdate: (formData: FormData) => void;
    onDelete: () => void;
    isAvatar?: boolean;
    showDelete?: boolean;
}

export const EditButtons: FC<EditButtonsProps> = ({
    children,
    onUpdate,
    onDelete,
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
            onUpdate(formData);
        },
        [isAvatar, onUpdate]
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
                    onClick={onDelete}
                    sx={{
                        ...buttonStyles,
                        top: 0,
                        borderRadius: "0px 15px 0px",
                        bgcolor: (theme) =>
                            alpha(theme.palette.bgcolor.tertiary.main, 0.6),
                        ":hover": {
                            cursor: "pointer",
                            transition: "all 0.2s ease-in",
                            bgcolor: alpha(pbColors.red, 0.9),
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
