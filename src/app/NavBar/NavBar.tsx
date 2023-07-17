import React from "react";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

export const NavBar = () => {
    return (
        <>
            <NavBarDesktop />
            <NavBarMobile />
        </>
    );
};

export default NavBar;
