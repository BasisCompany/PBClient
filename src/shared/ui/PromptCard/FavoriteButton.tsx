import { FC } from "react";
import { Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import {
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
} from "@/entities/favorites";

interface FavoriteButtonProps {
    id: number;
    isFavorite?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ id, isFavorite }) => {
    const [addToFavorites] = useAddToFavoritesMutation();
    const [deleteFromFavorites] = useDeleteFromFavoritesMutation();

    const toggleFavorites = async () => {
        try {
            if (isFavorite) {
                await deleteFromFavorites(id);
            } else {
                await addToFavorites(id);
            }
        } catch (error) {
            /* empty */
        }
    };
    return (
        <Box
            position="absolute"
            sx={{
                zIndex: 1,
                top: "6px",
                left: "160px",
            }}
        >
            <IconButton onClick={toggleFavorites}>
                {isFavorite ? (
                    <FavoriteIcon
                        sx={{
                            fontSize: "25px",
                            color: "red",
                        }}
                    />
                ) : (
                    <FavoriteTwoToneIcon
                        sx={{
                            fontSize: "25px",
                            color: "white",
                        }}
                    />
                )}
            </IconButton>
        </Box>
    );
};
