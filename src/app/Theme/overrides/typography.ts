import { Theme } from "@mui/material";

/*
h1 {
    fontWeight: 300,
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
}

h2 {
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
}

h3 {
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: "0em",
}

h4 {
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
}

h5 {
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: "0em", 
}
*/

export const MuiTypography = {
    styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
            color: theme.palette.text.primary,
        }),
    },
    defaultProps: {
        variantMapping: {
            title: "h3",
            subtitle: "h4",
            text: "p",
        },
    },
};

export const typography = {
    title: {
        fontSize: 30,
        lineHeight: 1.2,
    },
    subtitle: {
        fontSize: 20,
        lineHeight: 1.15,
    },
    text: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
    },
};

declare module "@mui/material/styles" {
    interface TypographyVariants {
        title: React.CSSProperties;
        subtitle: React.CSSProperties;
        text: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
        text?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        title: true;
        subtitle: true;
        text: true;
        h1: false;
        h2: false;
        h3: false;
        h4: false;
        h5: false;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
        button: false;
        caption: false;
        overline: false;
    }
}
