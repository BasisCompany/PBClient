import { Tabs } from "@mui/material";
import { TabsProps, tabsClasses } from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

export const ContentTabs = styled((props: TabsProps) => (
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
