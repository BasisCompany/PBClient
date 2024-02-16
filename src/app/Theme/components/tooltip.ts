export const MuiTooltip = {
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
};
