import { Box } from "@mui/material";

export interface ContentWrapperProps {
    children: React.ReactNode;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
    return (
        <Box
            sx={{
                //bgcolor: "#966",
                position: "relative",
                width: { xs: "100%", lg: "calc(80% - 15px)" },
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                mt: { xs: "15px", lg: "0px" },
            }}
        >
            {children}
        </Box>
    );
};
