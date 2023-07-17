import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

import { NavBarContext } from "./NavBarContext";
import NavBarContentClose from "./NavBarContentClose";
import NavBarContentOpen from "./NavBarItems";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
        width: "240px",
    },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const NavBarMobile = () => {
    const drawerRef = useRef(null);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    return (
        <Box
            sx={{ display: "flex" }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <CustomDrawer
                open={false} //TODO: FIX
                onClose={toggleDrawer(false)}
                sx={{
                    display: { xs: "block", sm: "none" },
                }}
            >
                <DrawerHeader />
                {false ? <NavBarContentOpen /> : <></>} //TODO: FIX
            </CustomDrawer>
        </Box>
    );
};

NavBarMobile.propTypes = {
    children: PropTypes.any,
};

export default NavBarMobile;
