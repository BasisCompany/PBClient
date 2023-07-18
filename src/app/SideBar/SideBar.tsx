import { useMobileDevice } from "../../hooks/useMobileDevice";
import { SideBarDesktop } from "./SideBarDesktop";
import { SideBarMobile } from "./SideBarMobile";

export const SideBar = () => {
    const isMobile = useMobileDevice();

    return isMobile ? <SideBarMobile /> : <SideBarDesktop />;
};
