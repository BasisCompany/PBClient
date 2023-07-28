import { Tabs } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

interface ContentTabsProps {
    children?: React.ReactNode;
    value: number;
    variant: "standard" | "scrollable" | "fullWidth" | undefined;
    scrollButtons: boolean | "auto" | undefined;
    allowScrollButtonsMobile: boolean;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const ContentTabs = styled((props: ContentTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    //backgroundColor: "#543",
    [`& .${tabsClasses.scrollButtons}`]: {
        "&.Mui-disabled": { opacity: 0.3 },
        color: "#fff",
        position: "relative",
    },
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: "100%",
        width: "100%",
        backgroundColor: "#9933ff",
    },
    "& .MuiTab-root:last-child": {
        marginRight: 0,
    },
});
