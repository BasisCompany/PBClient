import { Popper, PopperProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { NavBarPopperType } from "./types";
import { usePopper } from "./usePopper";

interface NavBarPopperProps extends Omit<PopperProps, "open" | "id"> {
    id: NavBarPopperType;
    children: ReactNode;
}

export const NavBarPopper: FC<NavBarPopperProps> = ({
    children,
    id,
    ...props
}) => {
    const { popper } = usePopper();
    const isOpen = popper.current === id;
    const popperId = isOpen ? `${id}-popper` : undefined;
    return (
        <Popper
            id={popperId}
            open={isOpen}
            anchorEl={popper.anchor}
            placement="bottom-end"
            sx={{
                zIndex: 1250,
                backgroundColor: (theme) =>
                    theme.palette.bgcolor.modal.primary.main,
                borderRadius: "5px",
            }}
            modifiers={[
                {
                    name: "offset",
                    options: {
                        offset: [0, 10],
                    },
                },
            ]}
            {...props}
        >
            {children}
        </Popper>
    );
};
