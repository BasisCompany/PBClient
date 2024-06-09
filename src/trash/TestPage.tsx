import { Box, Grid, Typography } from "@mui/material";
import { TestForm } from "./TestForm";
import { useAuth } from "@/shared/hooks/useAuth";
import { PrimaryButton } from "@/shared/ui/Buttons/PrimaryButton";
import { useAddToCartMutation } from "@/entities/cart";
import { useGetAllPromptsQuery } from "@/entities/prompt";

const TestPage = () => {
    const { isUserAuthenticated } = useAuth();

    const { data = [] } = useGetAllPromptsQuery();
    const [addToCart] = useAddToCartMutation();

    const handleAddToCart = async (id: number) => {
        try {
            await addToCart(id);
        } catch (error) {
            /* empty */
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Box>
                <Typography variant="title">Промпты</Typography>

                <Grid container sx={{ m: 2, gap: "10px" }}>
                    {data.map((el) => (
                        <Box
                            width="200px"
                            height="150px"
                            sx={{ border: "2px solid white", p: 1 }}
                            key={el.id}
                        >
                            <Typography variant="subtitle" mb={2}>
                                {el.title} - {el.id}
                            </Typography>

                            <Typography variant="text">{el.price} ₽</Typography>
                            <Box width="150px" mt={2}>
                                <PrimaryButton
                                    onClick={() => handleAddToCart(el.id)}
                                >
                                    В корзину
                                </PrimaryButton>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ width: "400px" }}>
                <TestForm />
            </Box>
            <Box sx={{ width: "200px", m: 5, textAlign: "center" }}>
                {isUserAuthenticated ? (
                    <Typography color="green">Авторизация выполнена</Typography>
                ) : (
                    <Typography color="red">Не авторизирован</Typography>
                )}
            </Box>
        </Box>
    );
};

export default TestPage;
