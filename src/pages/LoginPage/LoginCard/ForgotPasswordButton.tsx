import { LinkTypography } from "@/shared/ui/Links";
import { FlexBox } from "@/shared/ui/FlexBox";

export const ForgotPasswordButton = () => {
    return (
        <FlexBox justifyContent="center" mt="10px">
            <LinkTypography to="/forgot-password" variant="h6" fontSize={14}>
                Забыли пароль?
            </LinkTypography>
        </FlexBox>
    );
};
