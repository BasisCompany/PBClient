import { HeaderCover } from "./HeaderCover";
import { HeaderInformation } from "./HeaderInformation";
import { HeaderAvatar } from "./HeaderAvatar";
import { HeaderAbout } from "./HeaderAbout";
import { HeaderButtons } from "./HeaderButtons";
import { HeaderWrapper } from "./HeaderWrapper";
import { memo } from "react";

export const ProfileHeader = () => {
    return (
        <HeaderWrapper>
            <HeaderCover urlCoverImage="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg" />
            <HeaderInformation>
                <HeaderAvatar urlAvatarImage="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg" />
                {/* <HeaderAbout name={"Molot"} status={"Flex"} />
                <HeaderButtons /> */}
            </HeaderInformation>
        </HeaderWrapper>
    );
};
