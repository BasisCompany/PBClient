import { Box } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { LinkIconButton } from "../Links";

export const CartButton = () => {
    return (
        <Box
            position="absolute"
            sx={{
                top: "40px",
                left: "160px",
                zIndex: 1,
            }}
        >
            <LinkIconButton to="/cart">
                <ShoppingCartTwoToneIcon
                    sx={{
                        fontSize: "25px",
                        color: "white",
                    }}
                />
            </LinkIconButton>
        </Box>
    );
};
