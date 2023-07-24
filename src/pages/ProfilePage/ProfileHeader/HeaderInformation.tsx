import { Box } from "@mui/material";

export interface HeaderInformationProps {
    children: React.ReactNode;
}

export const HeaderInformation: React.FC<HeaderInformationProps> = ({
    children,
}) => {
    return (
        <Box
            sx={{
                //bgcolor: "#651",
                bgcolor: "primary.main",
                width: "100%",
                top: { xs: "200px", md: "300px" },
                height: { xs: "250px", md: "150px" },
                position: "absolute",
                borderRadius: "30px 30px 0px 0px",
                display: "flex",
                padding: "15px",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            {children}
        </Box>
    );
};
