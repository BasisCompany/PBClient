import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { LinkButton } from "../../../UI/Buttons/LinkButton";
import { Tooltip, IconButton, Badge } from "@mui/material";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useThemeMode } from "../../Theme/ThemeContext/useThemeMode";

export const NavBarLogin = () => {
    const { mode, toggleThemeMode } = useThemeMode();
    return (
        <>
            <Tooltip
                title={mode === "light" ? "Тёмная тема" : "Светлая тема"}
                disableInteractive
            >
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={toggleThemeMode}
                >
                    {mode === "light" ? (
                        <DarkModeRoundedIcon fontSize="small" />
                    ) : (
                        <LightModeRoundedIcon />
                    )}
                </IconButton>
            </Tooltip>
            <LinkButton
                to="/login"
                variant="contained"
                startIcon={<PersonRoundedIcon />}
                sx={{
                    ml: 1,
                }}
            >
                Войти
            </LinkButton>
        </>
    );
};
