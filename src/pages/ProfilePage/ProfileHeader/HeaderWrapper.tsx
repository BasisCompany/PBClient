import { Card } from "@mui/material";

export interface HeaderWrapperProps {
    children: React.ReactNode;
}

export const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
    return (
        <Card
            sx={{
                //bgcolor: "#766",
                position: "relative",
                width: "100%",
                height: "450px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                mb: "15px",
            }}
        >
            {children}
        </Card>
    );
};
