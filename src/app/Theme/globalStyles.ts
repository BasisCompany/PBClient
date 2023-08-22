import { Theme } from "@mui/material/styles";
import { EThemeMode } from "./enums/themeMode.enum";

const defaultDarkStyles = {
    background: {
        paper: "#0f0f0f",
        default: "#0f0f0f",
    },
};

const lightStyles = {
    primary: {
        main: "#ffffff",
        dark: "#ffffff",
    },
    secondary: {
        main: "#ddccfc",
    },
    test: {
        main: "#000000",
        dark: "#000000",
    },
    background: {
        paper: "#edeef0",
        default: "#edeef0",
    },
    text: {
        primary: "#000000",
        secondary: "#1e1e1e",
    },
    action: {
        active: "#1e1e1e",
        hover: "#ddccfc",
        selected: "#ddccfc",
    },
};

const darkStyles = {
    ...defaultDarkStyles,
    primary: {
        main: "#272727",
        dark: "#272727",
    },
    secondary: {
        main: "#9933FF",
    },
    test: {
        main: "#9933FF",
        dark: "#9933FF",
    },
    text: {
        primary: "#FFF",
        secondary: "#d1d1dc",
    },
    action: {
        active: "#d1d1dc",
        hover: "#272727",
        selected: "#9933FF",
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
    "scrollbar-width": "thin",
    "scrollbar-color": "#9933FF rgba(0,0,0,0)",
};

declare module "@mui/material/styles/createPalette" {
    interface BackgroundColorOptions {
        main: string;
        hover: string;
        active: string;
    }

    interface PaletteOptions {
        bgcolor?: {
            content?: BackgroundColorOptions;
            secondary?: BackgroundColorOptions;
            tertiary?: BackgroundColorOptions;
            modal?: {
                content: BackgroundColorOptions;
                secondary: BackgroundColorOptions;
            };
        };
    }

    interface Palette {
        bgcolor: {
            content: BackgroundColorOptions;
            secondary: BackgroundColorOptions;
            tertiary: BackgroundColorOptions;
            modal: {
                content: BackgroundColorOptions;
                secondary: BackgroundColorOptions;
            };
        };
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
// const colors = {
//     black: {
//         DEFAULT: "#000000",
//         100: "#373737",
//         200: "#313131",
//         300: "#303030",
//         400: "#282828",
//         500: "#272727",
//         600: "#1a1a1a",
//         700: "#0f0f0f",
//     },
//     gray: {
//         DEFAULT: "##808080",
//         100: "#585858",
//         200: "#545454",
//         300: "#4b4b4b",
//         400: "#4a4a4a",
//         500: "#444444",
//         600: "#3e3e3e",
//         700: "#3d3d3d",
//         800: "#3c3c3c",
//     },
// };
