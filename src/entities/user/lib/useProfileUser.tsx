import { useContext } from "react";
import { ProfileContext } from "./ProfileProvider";

export const useProfileUser = () => {
    return useContext(ProfileContext)!;
};
