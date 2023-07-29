import { EThemeMode } from "./enums/themeMode.enum";

const lightStyles = {
    primary: {
        main: "#ffffff",
        dark: "#ffffff",
    },
    secondary: {
        main: "#ddccfc",
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
    primary: {
        main: "#272727",
        dark: "#272727",
    },
    secondary: {
        main: "#9933FF",
    },
    background: {
        paper: "#0f0f0f",
        default: "#0f0f0f",
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
};

export const getGlobalStyles = (mode: EThemeMode) => ({
    palette: {
        mode,
        ...(mode === EThemeMode.light ? lightStyles : darkStyles),
    },
    components: componentsStyleOverrides,
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
};
