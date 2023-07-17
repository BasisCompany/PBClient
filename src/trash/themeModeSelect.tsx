import { FC, useEffect, useState } from "react";
import { GlobalTheme } from "./Theme/GlobalTheme";
import {
    Container,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    useTheme,
} from "@mui/material";
import { useThemeMode } from "./Theme/ThemeContext/useThemeMode";
import { EThemeMode } from "./Theme/enums/themeMode.enum";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

export const ThemeModeSelect: FC = () => {
    const theme = useThemeMode();

    const [alignment, setAlignment] = useState<EThemeMode>(EThemeMode.system);

    useEffect(() => {
        setAlignment(theme!.mode);
    }, [theme]);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: EThemeMode
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            theme!.toggleThemeMode(newAlignment);
        }
    };

    return (
        <div>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{
                        padding: "20px",
                    }}
                >
                    MODE
                </Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="light">
                        <LightModeIcon />
                        <Typography
                            variant="subtitle2"
                            sx={{ padding: "0px 18px 0px" }}
                        >
                            Light
                        </Typography>
                    </ToggleButton>
                    <ToggleButton value="system">
                        <SettingsBrightnessIcon />
                        <Typography
                            variant="subtitle2"
                            sx={{ padding: "0px 18px 0px" }}
                        >
                            System
                        </Typography>
                    </ToggleButton>
                    <ToggleButton value="dark">
                        <DarkModeOutlinedIcon />
                        <Typography
                            variant="subtitle2"
                            sx={{ padding: "0px 18px 0px" }}
                        >
                            Dark
                        </Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Container>
        </div>
    );
};
