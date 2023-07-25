import { Box, Container } from "@mui/material";

export interface ProfileWrapperProps {
    children: React.ReactNode;
}

export const ProfileWrapper: React.FC<ProfileWrapperProps> = ({ children }) => {
    return (
        <Box
            sx={{
                mt: "15px",
                mb: "15px",
                position: "relative",
                // display: "flex",
                // justifyContent: "center",
                //bgcolor: "#687",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    // display: "flex",
                    // justifyContent: "center",
                    //bgcolor: "#987",
                }}
            >
                {children}
            </Container>
        </Box>
    );
};
