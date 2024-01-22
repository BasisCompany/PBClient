import { IconButton, Tooltip } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { LinkButton } from "../../UI/Links/LinkButton";
import { useThemeMode } from "../../app/Theme/ThemeContext/useThemeMode";
import { EThemeMode } from "../../app/Theme/enums/themeMode.enum";

export const NavBarLogin = () => {
    const { mode, toggleThemeMode } = useThemeMode();
    return (
        <>
            <Tooltip
                title={
                    mode === EThemeMode.light ? "Тёмная тема" : "Светлая тема"
                }
                disableInteractive
            >
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={toggleThemeMode}
                >
                    {mode === EThemeMode.light ? (
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
                    minWidth: "90px",
                }}
            >
                Войти
            </LinkButton>
        </>
    );
};
