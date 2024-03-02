import { Typography, Switch } from "@mui/material";
import { useThemeMode } from "@/app/providers/Theme";
import { EThemeMode } from "@/app/providers/Theme/enums/themeMode.enum";
import { FlexBox } from "@/shared/ui/FlexBox";

export const SettingsSite = () => {
    const { mode, toggleThemeMode } = useThemeMode();

    return (
        <FlexBox alignItems="center" justifyContent="space-between">
            <Typography variant="text">Включить ночную тему</Typography>
            <Switch
                checked={mode === EThemeMode.dark}
                onChange={toggleThemeMode}
                color="secondary"
            />
        </FlexBox>
    );
};
