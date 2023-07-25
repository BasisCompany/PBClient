import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { LinkButton } from "../../../UI/Buttons/LinkButton";

export const NavBarLogin = () => {
    return (
        <LinkButton
            to="/login"
            variant="contained"
            startIcon={<PermIdentityIcon />}
        >
            Войти
        </LinkButton>
    );
};
