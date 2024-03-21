import { useContext } from "react";
import { PopperContext } from "./NavBarPopperProvider";

export const usePopper = () => {
    return useContext(PopperContext)!;
};
