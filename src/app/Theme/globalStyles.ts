import { Theme } from "@mui/material/styles";
import { EThemeMode } from "./enums/themeMode.enum";

const defaultDarkStyles = {
    primary: {
        main: "#272727",
        dark: "#272727",
    },
    secondary: {
        main: "#9933FF",
    },
    action: {
        active: "#d1d1dc",
        hover: "#272727",
        selected: "#9933FF",
    },
    background: {
        paper: "#0f0f0f",
        default: "#0f0f0f",
    },
};

const darkStyles = {
    ...defaultDarkStyles,
    text: {
        primary: "#FFF",
        secondary: "#d1d1dc",
        hover: "#9933FF",
        disabled: "#4d4d4d",
    },
    bgcolor: {
        content: {
            main: "#0f0f0f",
            hover: "#262626",
            active: "#484848",
        },
        secondary: {
            main: "#272727",
            hover: "#393939",
            active: "#545454",
        },
        tertiary: {
            main: "#3d3d3d",
            hover: "#4a4a4a",
            active: "#5f5f5f",
        },
        modal: {
            content: {
                main: "#282828",
                hover: "#3a3a3a",
                active: "#555555",
            },
            secondary: {
                main: "#373737",
                hover: "#464646",
                active: "#5c5c5c",
            },
        },
    },
};

const defaultLightStyles = {
    primary: {
        main: "#E0E0E0",
        dark: "#E0E0E0",
    },
    secondary: {
        main: "#9933FF",
    },
    action: {
        active: "#3f3f46",
        hover: "#E0E0E0",
        selected: "#9933FF",
    },
    background: {
        paper: "#FFFFFF",
        default: "#FFFFFF",
    },
};

const lightStyles = {
    ...defaultLightStyles,
    text: {
        primary: "#272727",
        secondary: "#7E7E7E",
        hover: "#9933FF",
        disabled: "#A0A0A0",
    },
    bgcolor: {
        content: {
            main: "#FFFFFF",
            hover: "#E0E0E0",
            active: "#B0B0B0",
        },
        secondary: {
            main: "#E0E0E0",
            hover: "#D0D0D0",
            active: "#C0C0C0",
        },
        tertiary: {
            main: "#D0D0D0",
            hover: "#C0C0C0",
            active: "#A0A0A0",
        },
        modal: {
            content: {
                main: "#E0E0E0",
                hover: "#D0D0D0",
                active: "#C0C0C0",
            },
            secondary: {
                main: "#D0D0D0",
                hover: "#C0C0C0",
                active: "#A0A0A0",
            },
        },
    },
};

export const getGlobalStyles = (mode: EThemeMode) => ({
    palette: {
        mode,
        ...(mode === EThemeMode.light ? lightStyles : darkStyles),
    },
    components: componentsStyleOverrides,
    scrollbar: scrollbarStyles,
});

const componentsStyleOverrides = {
    MuiTooltip: {
        styleOverrides: {
            tooltip: () => {
                return {
                    "&.MuiTooltip-tooltip": {
                        "&.MuiTooltip-tooltipPlacementBottom": {
                            marginTop: "6px",
                        },
                    },
                };
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                backgroundImage: "none",
            },
        },
    },
    MuiTypography: {
        styleOverrides: {
            root: ({ theme }: { theme: Theme }) => ({
                color: theme.palette.text.primary,
            }),
        },
    },
};

const scrollbarStyles = {
    "&::-webkit-scrollbar": {
        width: "0.5em",
        height: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
        background: "rgba(0,0,0,0)",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#9933FF",
        borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        background: "#7A18DC",
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#9933FF rgba(0,0,0,0)",
};

declare module "@mui/material/styles/createPalette" {
    interface BackgroundColorOptions {
        main: string;
        hover: string;
        active: string;
    }
    interface BackgroundColor {
        content: BackgroundColorOptions;
        secondary: BackgroundColorOptions;
        tertiary: BackgroundColorOptions;
        modal: {
            content: BackgroundColorOptions;
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
