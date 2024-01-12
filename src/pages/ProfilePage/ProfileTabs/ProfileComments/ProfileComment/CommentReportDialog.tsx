import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    IconButton,
    InputBase,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { ChangeEvent, FC, useState } from "react";
import { useMobileDevice } from "../../../../../hooks/useMobileDevice";

const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        backgroundColor: theme.palette.bgcolor.modal.primary.main,
        backgroundImage: "none",
        borderRadius: "15px",
    },
}));

interface CommentReportDialogProps {
    open: boolean;
    onClose: () => void;
    commentId: number;
}

export const CommentReportDialog: FC<CommentReportDialogProps> = ({
    open,
    onClose,
}) => {
    const isMobile = useMobileDevice();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [radioValue, setRadioValue] = useState("");
    //React hook form for text field
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    };

    return (
        <CustomDialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullScreen={isMobile}
            sx={{
                "& .MuiDialog-paper": {
                    p: 1,
                    width: isMobile ? "100%" : "360px",
                },
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                <Typography
                    variant="h6"
                    component="span"
                    color={(theme) => theme.palette.text.primary}
                    fontSize={19}
                    fontWeight={400}
                >
                    Жалоба на комментарий
                </Typography>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 4,
                    top: 20,
                    color: (theme) => theme.palette.text.secondary,
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent
                sx={{
                    pt: 0,
                    pb: 0.5,
                    display: "flex",
                    pl: "18px",
                }}
            >
                <Box>
                    <FormControl>
                        <Typography
                            variant="h6"
                            component="span"
                            color={(theme) => theme.palette.text.secondary}
                            fontSize={15}
                            fontWeight={400}
                        >
                            Выберите причину
                        </Typography>
                        <RadioGroup
                            name="radio-buttons-group"
                            onChange={handleRadioChange}
                            sx={{
                                "& .MuiFormControlLabel-label": {
                                    pt: "2px",
                                    color: (theme) =>
                                        theme.palette.text.secondary,
                                    fontSize: "16px",
                                },
                                "& .MuiFormControlLabel-root": {
                                    "& .Mui-checked": {
                                        color: (theme) =>
                                            theme.palette.secondary.main,
                                    },
                                },
                            }}
                        >
                            <FormControlLabel
                                value="offensive"
                                control={<Radio />}
                                label="Оскорбление пользователей"
                            />
                            <FormControlLabel
                                value="spam"
                                control={<Radio />}
                                label="Реклама / Спам"
                            />
                            <FormControlLabel
                                value="filthy"
                                control={<Radio />}
                                label="Ненормативная лексика"
                            />
                            <FormControlLabel
                                value="prohibited "
                                control={<Radio />}
                                label="Запрещенный контент"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Другое"
                            />
                        </RadioGroup>
                    </FormControl>
                    <InputBase
                        multiline
                        fullWidth
                        placeholder="Описание проблемы"
                        sx={{
                            p: 2,
                            mt: 1,
                            borderRadius: "5px",
                            color: (theme) => theme.palette.text.secondary,
                            backgroundColor: (theme) =>
                                theme.palette.bgcolor.modal.secondary.main,
                            transition: "all 0.1s ease-in",
                            ".MuiInputBase-input::placeholder": {
                                opacity: 1,
                                transition: "all 0.1s ease-out",
                            },
                            ".MuiInputBase-input:focus": {
                                color: (theme) => theme.palette.text.primary,
                            },
                        }}
                    />
                </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "end", mr: 1 }}>
                <Button
                    onClick={onClose}
                    disableRipple
                    sx={{
                        color: "#E23232",
                        textTransform: "none",
                        fontSize: 14,
                        fontWeight: 400,
                        transition: "none",
                        ":hover": {
                            backgroundColor: alpha("#E23232", 0.1),
                        },
                    }}
                >
                    Отмена
                </Button>
                <Button
                    onClick={onClose}
                    disableRipple
                    sx={{
                        color: (theme) => theme.palette.secondary.main,
                        textTransform: "none",
                        fontSize: 14,
                        fontWeight: 400,
                        transition: "none",
                        ":hover": {
                            backgroundColor: (theme) =>
                                alpha(theme.palette.secondary.main, 0.1),
                        },
                    }}
                >
                    Отправить
                </Button>
            </DialogActions>
        </CustomDialog>
    );
};
