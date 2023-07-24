import { Box, Card, Container } from "@mui/material";

export interface HeaderWrapperProps {
    children: React.ReactNode;
}

export const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
    return (
        <Box
            sx={{
                mt: "15px",
                mb: "15px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                //bgcolor: "#687",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    //bgcolor: "#987",
                }}
            >
                <Card
                    sx={{
                        //bgcolor: "#766",
                        position: "relative",
                        width: "100%",
                        height: "450px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "15px",
                    }}
                >
                    {children}
                </Card>
            </Container>
        </Box>
    );
};
