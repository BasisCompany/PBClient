import { Box, Typography, styled } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonBase from "@mui/material/ButtonBase";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const SocialButton = styled(ButtonBase)(({ theme }) => ({
    fontSize: 15,
    width: "70%",
    minHeight: "45px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.bgcolor.tertiary.main,
    "&:hover": {
        backgroundColor: theme.palette.bgcolor.tertiary.main,
    },
}));

export const MarketplaceFilters = () => {
    return (
        <Box
            sx={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
        >
            <SocialButton>
                <Box sx={{ width: "80%" }}>
                    <Typography variant="text">Сбросить фильтры</Typography>
                </Box>
                <HighlightOffIcon />
            </SocialButton>
            <FormGroup sx={{ display: "flex", gap: 0 }}>
                <Typography variant="subtitle">Тип</Typography>
                <FormControlLabel
                    control={<Checkbox defaultChecked color="secondary" />}
                    label="Все"
                />
                <FormControlLabel control={<Checkbox />} label="Изображения" />
                <FormControlLabel control={<Checkbox />} label="Текст" />
            </FormGroup>
            <FormGroup sx={{ display: "flex", gap: 0 }}>
                <Typography variant="subtitle">Модель</Typography>
                <FormControlLabel
                    control={<Checkbox defaultChecked color="secondary" />}
                    label="Все"
                />
                <FormControlLabel control={<Checkbox />} label="DALL·E" />
                <FormControlLabel control={<Checkbox />} label="GPT" />
                <FormControlLabel control={<Checkbox />} label="Midjourney" />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Stable Diffusion"
                />
            </FormGroup>
            <FormGroup sx={{ display: "flex", gap: 0 }}>
                <Typography variant="subtitle">Категория</Typography>
                <FormControlLabel
                    control={<Checkbox defaultChecked color="secondary" />}
                    label="Все"
                />
                <FormControlLabel control={<Checkbox />} label="3D" />
                <FormControlLabel control={<Checkbox />} label="Реклама" />
                <FormControlLabel control={<Checkbox />} label="Животные" />
                <FormControlLabel control={<Checkbox />} label="Аниме" />
                <FormControlLabel control={<Checkbox />} label="Рисунки" />
                <FormControlLabel control={<Checkbox />} label="Аватар" />
                <FormControlLabel control={<Checkbox />} label="Строения" />
                <FormControlLabel control={<Checkbox />} label="Мультфильмы" />
            </FormGroup>
        </Box>
    );
};
