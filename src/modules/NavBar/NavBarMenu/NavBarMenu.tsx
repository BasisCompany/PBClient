import { AccountPopper } from "./Poppers/AccountPopper/AccountPopper";
import { NotificationsPopper } from "./Poppers/NotificationsPopper/NotificationsPopper";
import { NavBarPopper, NavBarPopperProvider } from "./ui/NavbarPopper";
import { NavBarButtons } from "./NavBarButtons";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";

export const NavBarMenu = () => {
    const isMobile = useMobileDevice();
    return (
        <NavBarPopperProvider>
            <FlexBox>
                <NavBarButtons />
                {!isMobile && (
                    <NavBarPopper id="notifications">
                        <NotificationsPopper />
                    </NavBarPopper>
                )}
                <NavBarPopper id="account">
                    <AccountPopper />
                </NavBarPopper>
            </FlexBox>
        </NavBarPopperProvider>
    );
};
