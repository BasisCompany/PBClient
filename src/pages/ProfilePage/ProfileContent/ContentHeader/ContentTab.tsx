import { Tab, TabProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContentTab = styled((props: TabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: "none",
    paddingLeft: "0",
    paddingRight: "0",

    //fontWeight: theme.typography.fontWeightLight,
    fontSize: theme.typography.pxToRem(19),
    marginRight: theme.spacing(5),

    color: "rgba(255, 255, 255, 0.7)",
    minHeight: "0px",

    "&.Mui-selected": {
        color: "#fff",
    },
    "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
}));
