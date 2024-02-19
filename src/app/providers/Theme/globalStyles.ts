import {
    MuiCard,
    MuiLink,
    MuiTooltip,
    MuiTypography,
    scrollbarStyles,
    typography,
} from "./overrides";
import { EThemeMode } from "./enums/themeMode.enum";
import { lightStyles, darkStyles } from "./themeColors";

export const getGlobalStyles = (mode: EThemeMode) => ({
    palette: {
        mode,
        ...(mode === EThemeMode.light ? lightStyles : darkStyles),
    },
    typography,
    components: {
        MuiTooltip,
        MuiCard,
        MuiTypography,
        MuiLink,
    },
    scrollbar: scrollbarStyles,
});

declare module "@mui/material/styles/createPalette" {
    interface BackgroundColorOptions {
        main: string;
        hover: string;
        active: string;
    }
    interface BackgroundColor {
        primary: BackgroundColorOptions;
        secondary: BackgroundColorOptions;
        tertiary: BackgroundColorOptions;
        modal: {
            primary: BackgroundColorOptions;
            secondary: BackgroundColorOptions;
        };
    }

    interface TypeText {
        hover: string;
    }

    interface Palette {
        bgcolor: BackgroundColor;
    }
    interface PaletteOptions {
        bgcolor?: Partial<BackgroundColor>;
    }
}

declare module "@mui/material/styles/createTheme" {
    interface ThemeOptions {
        scrollbar?: object;
    }

    interface Theme {
        scrollbar: object;
    }
}
