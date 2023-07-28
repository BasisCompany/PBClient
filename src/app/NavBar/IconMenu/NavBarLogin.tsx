import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { LinkButton } from "../../../UI/Buttons/LinkButton";

export const NavBarLogin = () => {
    return (
        <LinkButton
            to="/login"
            variant="contained"
            startIcon={<PersonRoundedIcon />}
        >
            Войти
        </LinkButton>
    );
};
