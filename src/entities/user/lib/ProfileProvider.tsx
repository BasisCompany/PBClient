import { FC, ReactNode, createContext } from "react";
import { UserProfile } from "../model/types";

export const ProfileContext = createContext<UserProfile | null>(null);

interface ProfileProviderProps {
    userAbout: UserProfile;
    children: ReactNode;
}

export const ProfileProvider: FC<ProfileProviderProps> = ({
    userAbout,
    children,
}) => {
    return (
        <ProfileContext.Provider value={userAbout}>
            {children}
        </ProfileContext.Provider>
    );
};
