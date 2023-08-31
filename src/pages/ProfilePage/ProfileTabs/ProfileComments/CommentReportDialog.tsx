import * as React from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    Button,
    DialogTitle,
    IconButton,
    DialogContent,
    Typography,
    DialogActions,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    DialogContentText,
    Box,
} from "@mui/material";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";

const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        backgroundColor: theme.palette.bgcolor.modal.primary.main,
        backgroundImage: "none",
    },
}));

interface CommentReportDialogProps {
    open: boolean;
    onClose: () => void;
}

export const CommentReportDialog: React.FC<CommentReportDialogProps> = ({
    open,
    onClose,
}) => {
    const isMobile = useMobileDevice();

    return (
        <CustomDialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullScreen={isMobile}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>Жалоба на комментарий</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.text.primary,
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent
                sx={{ pt: 0, display: "flex", alignItems: "center" }}
            >
                <Box>
                    <DialogContentText>Выберите причину</DialogContentText>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Оскорбление пользователей"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Реклама / Спам"
                        />
                        <FormControlLabel control={<Checkbox />} label="Флуд" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Ненормативная лексика"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Запрещенный контент"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Другое"
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </FormGroup>
                </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center" }}>
                <Button
                    variant="contained"
                    autoFocus
                    onClick={onClose}
                    fullWidth
                    sx={{
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.modal.secondary.main,
                        boxShadow: "none",
                        ":hover": {
                            bgcolor: (theme) =>
                                theme.palette.bgcolor.modal.secondary.hover,
                            boxShadow: "none",
                        },
                    }}
                >
                    Отправить
                </Button>
            </DialogActions>
        </CustomDialog>
    );
};
