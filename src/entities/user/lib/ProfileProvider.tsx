import { FC, ReactNode, createContext } from "react";
import { UserAbout } from "../model/types";

export const ProfileContext = createContext<UserAbout | null>(null);

interface ProfileProviderProps {
    userAbout: UserAbout;
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
