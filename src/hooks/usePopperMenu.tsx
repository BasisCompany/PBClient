import { useState } from "react";

export const usePopperMenu = () => {
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setMenuAnchor(null);
    };

    return { menuAnchor, handleOpenMenu, handleCloseMenu };
};
